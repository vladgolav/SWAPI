import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as COLORS from 'src/constants/colors';

import styles from './styles';
import { moderateScale } from 'react-native-size-matters';

interface IHeader {
  goBack?: () => void;
  title: string;
  renderRightComponent?: React.ReactNode;
}

const Header: React.FC<IHeader> = ({ goBack, title, renderRightComponent }) => {
  const renderLeft = () => {
    if (goBack) {
      return (
        <TouchableOpacity onPress={goBack} hitSlop={15}>
          <Icon
            name="arrow-back-ios"
            size={moderateScale(30)}
            color={COLORS.lightBlack}
          />
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderRight = () => {
    if (renderRightComponent) {
      return renderRightComponent;
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftPartContainer}>
        {renderLeft()}
      </View>
      <Text style={styles.titleText}>
        {title}
      </Text>
      <View style={styles.rightPartContainer}>
        {renderRight()}
      </View>
    </View>
  );
};

export default Header;
