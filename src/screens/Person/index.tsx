import React from 'react';

import { INavigation } from 'src/interfaces/navigation.interface';

import PersonScreen from './Person';

const Person: React.FC<INavigation> = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  
  return (
    <PersonScreen
      goBack={goBack}
    />
  );
};

export default Person;
