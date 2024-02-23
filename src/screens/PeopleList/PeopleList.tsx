import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { IPeople, PeopleArrayType } from 'src/interfaces/redux/people-list-redux.interface';

import Container from 'src/components/Container';
import Header from 'src/components/Header';
import PeopleListItem from 'src/components/PeopleListItem';

import styles from './styles';

interface IPeopleListScreen {
  goToCharacter: () => void;
  onRefreshList: () => void;
  list: PeopleArrayType
}

const PeopleListScreen: React.FC<IPeopleListScreen> = ({ goToCharacter, list }) => {
  const renderItem = ({ item }: {item: IPeople}) => {
    return (
      <PeopleListItem item={item} />
    );
  };

  return (
    <Container containerStyle={styles.container}>
      <Header
        title='People'
      />
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        style={styles.flatlist}
      />
    </Container>
  );
};

export default PeopleListScreen;
