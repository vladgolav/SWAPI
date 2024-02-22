import React from 'react';

import { INavigation } from 'src/interfaces/navigation.interface';

import ListScreen from './List';

const List: React.FC<INavigation> = ({ navigation }) => {
  const goToCharacter = () => {
    navigation.navigate('Character');
  };
  
  return (
    <ListScreen
      goToCharacter={goToCharacter}
    />
  );
}

export default List;
