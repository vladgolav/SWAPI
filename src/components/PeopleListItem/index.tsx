import React from 'react';
import { View, Text } from 'react-native';
import { IPeople } from 'src/interfaces/redux/people-list-redux.interface';
import styles from './styles';

interface IPeopleListItem {
  item: IPeople
}

const PeopleListItem: React.FC<IPeopleListItem> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

export default PeopleListItem;
