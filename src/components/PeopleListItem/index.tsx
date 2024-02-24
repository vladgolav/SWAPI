import React, { useContext, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from 'react-native-size-matters';

import { PeopleListContext } from 'src/screens/PeopleList';

import * as COLORS from 'src/constants/colors';

import { IPerson } from 'src/interfaces/redux/people-list-redux.interface';
import { IPeopleListContext } from 'src/interfaces/context.interface';

import styles from './styles';

interface IPeopleListItem {
  item: IPerson
}

const PeopleListItem: React.FC<IPeopleListItem> = ({ item }) => {
  const {
    goToPerson,
    onAddToFavoriteList,
    onRemoveFromFavoriteList,
    favoriteList,
  } = (useContext(PeopleListContext)) as IPeopleListContext;

  const isInFavorite = useMemo(
    () => favoriteList.some((favorite) => favorite.url === item.url),
    [favoriteList]
  );

  const onPersonPress = () => {
    goToPerson(item);
  }

  const onFavoritePress = () => {
    if (isInFavorite) {
      onRemoveFromFavoriteList(item.url);
    } else {
      onAddToFavoriteList(item);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPersonPress}>
      <TouchableOpacity hitSlop={moderateScale(15)} onPress={onFavoritePress}>
        <Icon
          name={isInFavorite ? "favorite" : "favorite-border"}
          size={moderateScale(30)}
          color={COLORS.red}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.descriptionText}>BB: {item.birth_year}</Text>
        <Text style={styles.descriptionText}>Gender: {item.gender}</Text>
      </View>
      <Icon
        name="arrow-forward-ios"
        size={moderateScale(20)}
        color={COLORS.lightGray}
      />
    </TouchableOpacity>
  );
};

export default PeopleListItem;
