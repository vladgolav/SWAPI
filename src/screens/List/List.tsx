import React from 'react';
import { View, Text } from 'react-native';

import Container from 'src/components/Container';
import Header from 'src/components/Header';

import styles from './styles';

interface IListScreen {
  goToCharacter: () => void;
  onRefreshList: () => void;
}

const ListScreen: React.FC<IListScreen> = ({ goToCharacter }) => {
  return (
    <Container containerStyle={styles.container}>
      <Header
        title='Characters'
      />
      <Text onPress={goToCharacter}>Go next</Text>
    </Container>
  );
};

export default ListScreen;
