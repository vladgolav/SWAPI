import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as COLORS from 'src/constants/colors';

import styles from './styles';
import { verticalScale } from 'react-native-size-matters';

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
            size={verticalScale(25)}
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
