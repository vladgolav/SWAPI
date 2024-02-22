import React from 'react';
import { ActivityIndicator, View, Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import * as COLORS from 'src/constants/colors';

import styles from './styles';

const Loader = () => {
  if (true) return null;
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={COLORS.lightBlack}
        size={Platform.OS === 'android' ? moderateScale(25) : 'large'} />
    </View>
  );
};

export default Loader;
