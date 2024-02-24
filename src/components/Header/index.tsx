import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface IHeader {
  goBack?: () => void;
  title: string;
  renderRightComponent?: React.ReactNode;
}

const Header: React.FC<IHeader> = ({ goBack, title, renderRightComponent }) => {
  const renderLeft = () => {
    if (goBack) {
      <TouchableOpacity>

      </TouchableOpacity>
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
