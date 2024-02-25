import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from 'react-native-size-matters';

import * as COLORS from 'src/constants/colors';

import styles from './styles';

interface IAccordion {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<IAccordion> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  const rotation = useRef(new Animated.Value(0));

  const onAccordionPress = () => {
    setOpen((value) => !value);
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    LayoutAnimation.configureNext({
      duration: 250,
      create: { type: 'linear', property: 'opacity', delay: 150, duration: 150 },
      update: { type: 'linear', property: 'opacity', delay: 100, },
      delete: { type: 'linear', property: 'opacity', delay: 0, duration: 50 },
    });
    Animated.timing(rotation.current, {
      toValue: isOpen ? 0 : 1,
      duration: 150,
      useNativeDriver: true,
    }).start()
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={onAccordionPress} style={styles.accordionButton}>
        <Text style={styles.titleText}>
          {title}
        </Text>
        <Animated.View
          style={{
            transform: [{
              rotate: rotation.current.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '90deg'],
              })
            }]
          }}
        >
          <Icon
            name="arrow-forward-ios"
            size={moderateScale(25)}
            color={COLORS.lightBlack}
          />
        </Animated.View>
      </TouchableOpacity>
      {
        isOpen ? (
          <View>
            {children}
          </View>
        ) : null
      }
    </View>
  );
};

export default Accordion;
