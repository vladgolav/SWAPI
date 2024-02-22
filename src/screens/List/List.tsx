import React from 'react';
import { View, Text } from 'react-native';

import Container from 'src/components/Container';

import styles from './styles';

interface IListScreen {
  goToCharacter: () => void;
};

const ListScreen: React.FC<IListScreen> = ({ goToCharacter }) => {
  return (
    <Container containerStyle={styles.container}>
      <Text onPress={goToCharacter}>Go next</Text>
    </Container>
  );
};

export default ListScreen;
