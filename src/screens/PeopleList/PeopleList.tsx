import React from 'react';
import { View, Text } from 'react-native';

import Container from 'src/components/Container';
import Header from 'src/components/Header';

import styles from './styles';

interface IPeopleListScreen {
  goToCharacter: () => void;
  onRefreshList: () => void;
}

const PeopleListScreen: React.FC<IPeopleListScreen> = ({ goToCharacter }) => {
  return (
    <Container containerStyle={styles.container}>
      <Header
        title='People'
      />
      <Text onPress={goToCharacter}>Go next</Text>
    </Container>
  );
};

export default PeopleListScreen;
