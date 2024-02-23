import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { INavigation } from 'src/interfaces/navigation.interface';

import { peopleListSelector } from 'src/redux/selectors';
import * as actions from 'src/redux/actions';
import ListScreen from './PeopleList';
import { LoadingType } from 'src/interfaces/redux/loading-redux.interface';

const PeopleList: React.FC<INavigation> = ({ navigation }) => {
  const list = useSelector(peopleListSelector);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    getList(1, 'getPeopleList');
  }, []);

  const getList = (page: number, loading: LoadingType) => {
    dispatch(actions.getPeopleListAction({ page, loading }));
  }
  
  const goToCharacter = () => {
    navigation.navigate('Person');
  };

  const onRefreshList = () => {
    getList(1, 'refreshPeopleList');
  };

  const onLoadMore = () => {
    getList(1, 'refreshPeopleList');
  };
  
  return (
    <ListScreen
      goToCharacter={goToCharacter}
      onRefreshList={onRefreshList}
    />
  );
}

export default PeopleList;
