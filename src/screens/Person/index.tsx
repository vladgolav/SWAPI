import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { INavigation } from 'src/interfaces/navigation.interface';
import { IPersonSelector } from 'src/interfaces/redux/person-redux.interface';
import { IPerson } from 'src/interfaces/redux/people-list-redux.interface';

import { currentPersonSelector, favoriteListSelector, personSelector } from 'src/redux/selectors';
import * as actions from 'src/redux/actions';

import PersonScreen from './Person';

const Person: React.FC<INavigation> = ({ navigation }) => {
  const person = useSelector(personSelector) as IPerson;
  const currentPerson = useSelector(currentPersonSelector) as IPersonSelector;
  const favoriteList = useSelector(favoriteListSelector);

  const dispatch = useDispatch();

  const isInFavorite = useMemo(
    () => favoriteList.some((favorite) => favorite.url === currentPerson.url),
    [currentPerson, favoriteList]
  );

  const goBack = () => {
    navigation.goBack();
  };

  const onFavoritePress = () => {
    if (isInFavorite) {
      dispatch(actions.removeFromFavoriteListAction(currentPerson.url));
    } else {
      dispatch(actions.addToFavoriteListAction(person));
    }
  };
  
  return (
    <PersonScreen
      goBack={goBack}
      currentPerson={currentPerson}
      isInFavorite={isInFavorite}
      onFavoritePress={onFavoritePress}
    />
  );
};

export default Person;
