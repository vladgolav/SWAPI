import React from 'react';
import { View, Text } from 'react-native';

import Container from 'src/components/Container';

import styles from './styles';

interface IPersonScreen {
  goBack: () => void;
}

const PersonScreen: React.FC<IPersonScreen> = ({ goBack }) => {
  return (
    <Container containerStyle={styles.container}>
      <Text onPress={goBack}>Go back</Text>
    </Container>
  );
};

export default PersonScreen;
