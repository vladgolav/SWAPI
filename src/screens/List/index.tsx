import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { INavigation } from 'src/interfaces/navigation.interface';

import { listSelector } from 'src/redux/selectors';
import * as actions from 'src/redux/actions';
import ListScreen from './List';
import { LoadingType } from 'src/interfaces/redux/loading-redux.interface';

const List: React.FC<INavigation> = ({ navigation }) => {
  const list = useSelector(listSelector);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    getList(1, 'getList');
  }, []);

  const getList = (page: number, loading: LoadingType) => {
    dispatch(actions.getListAction({ page, loading }));
  }
  
  const goToCharacter = () => {
    navigation.navigate('Character');
  };

  const onRefreshList = () => {
    getList(1, 'refreshList');
  };

  const onLoadMore = () => {
    getList(1, 'refreshList');
  };
  
  return (
    <ListScreen
      goToCharacter={goToCharacter}
      onRefreshList={onRefreshList}
    />
  );
}

export default List;
