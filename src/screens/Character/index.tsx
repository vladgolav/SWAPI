import React from 'react';

import { INavigation } from 'src/interfaces/navigation.interface';

import CharacterScreen from './Character';

const Character: React.FC<INavigation> = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  
  return (
    <CharacterScreen
      goBack={goBack}
    />
  );
};

export default Character;
