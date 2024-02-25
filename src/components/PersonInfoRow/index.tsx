import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IPersonInfoRow {
  title: string;
  description: string;
}

const PersonInfoRow: React.FC<IPersonInfoRow> = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};

export default PersonInfoRow;
