import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { INavigation } from 'src/interfaces/navigation.interface';

import { listSelector } from 'src/redux/selectors';
import * as actions from 'src/redux/actions';
import ListScreen from './List';

const List: React.FC<INavigation> = ({ navigation }) => {
  const list = useSelector(listSelector);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(actions.getListAction({ page: 1 }));
  }, []);
  
  const goToCharacter = () => {
    navigation.navigate('Character');
  };
  
  return (
    <ListScreen
      goToCharacter={goToCharacter}
    />
  );
}

export default List;
