import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface IHeader {
  goBack?: () => void;
  title: string;
  renderRightCompoent?: React.ReactNode;
}

const Header: React.FC<IHeader> = ({ goBack, title, renderRightCompoent }) => {
  const renderLeft = () => {
    if (goBack) {
      <TouchableOpacity>

      </TouchableOpacity>
    }

    return null;
  };

  const renderRight = () => {
    if (renderRightCompoent) {
      return renderRightCompoent;
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
