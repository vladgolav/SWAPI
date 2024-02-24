import React, { useLayoutEffect, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { INavigation } from 'src/interfaces/navigation.interface';
import { LoadingType } from 'src/interfaces/redux/loading-redux.interface';
import { IPeopleListContext } from 'src/interfaces/context.interface';
import { IPerson } from 'src/interfaces/redux/people-list-redux.interface';

import * as actions from 'src/redux/actions';

import ListScreen from './PeopleList';
import { countSelector, currentPageSelector, peopleListSelector } from 'src/redux/selectors';
import { loadingSelector } from 'src/redux/selectors/loading';
import { favoriteListSelector, favoriteSplitedListsSelector } from 'src/redux/selectors/favorite';
import { IRootState } from 'src/redux';

export const PeopleListContext = createContext<IPeopleListContext | null>(null);

const PeopleList: React.FC<INavigation> = ({ navigation }) => {
  const list = useSelector(peopleListSelector);
  const currentPage = useSelector(currentPageSelector);
  const count = useSelector(countSelector);
  const favoriteList = useSelector(favoriteListSelector);
  const favoriteSplitedLists = useSelector(favoriteSplitedListsSelector);
  const refreshing = useSelector(
    (state: IRootState) => loadingSelector(state, 'refreshPeopleList')
  );
  const loadModeLoading = useSelector(
    (state: IRootState) => loadingSelector(state, 'loadMorePeopleList')
  );

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    getList(1, 'getPeopleList');
  }, []);

  const getList = (page: number, loading: LoadingType) => {
    dispatch(actions.getPeopleListAction({ page, loading }));
  }
  
  const goToPerson = (item: IPerson) => {
    navigation.navigate('Person');
  };

  const onRefreshList = () => {
    getList(1, 'refreshPeopleList');
  };

  const onLoadMore = () => {
    if (!loadModeLoading) {
      const nextPage = currentPage + 1;
      if (count - (currentPage * 10) > 0) {
        getList(nextPage, 'loadMorePeopleList');
      }
    }
  };

  const onAddToFavoriteList = (item: IPerson) => {
    dispatch(actions.addToFavoriteListAction(item));
  };

  const onRemoveFromFavoriteList = (url: string) => {
    dispatch(actions.removeFromFavoriteListAction(url));
  };

  const onClearFavoriteList = () => {
    dispatch(actions.clearFavoriteListAction());
  };
  
  return (
    <PeopleListContext.Provider
      value={{
        goToPerson,
        onAddToFavoriteList,
        onRemoveFromFavoriteList,
        favoriteList,
      }}
    >
      <ListScreen
        onRefreshList={onRefreshList}
        onLoadMore={onLoadMore}
        list={list}
        refreshing={refreshing}
        loadModeLoading={loadModeLoading}
        favoriteSplitedLists={favoriteSplitedLists}
        onClearFavoriteList={onClearFavoriteList}
      />
    </PeopleListContext.Provider>
  );
}

export default PeopleList;
