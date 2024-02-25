import React from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native';

import styles from './styles';

type IContainer = {
  children: React.ReactNode;
  containerStyle?: ViewStyle | object
}

const Container: React.FC<IContainer & SafeAreaViewProps> = ({
  children, edges, containerStyle
}) => {
  return (
    <SafeAreaView edges={edges} style={[styles.container, containerStyle]}>
      {children}
    </SafeAreaView>
  );
}

export default Container;
