import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import List from 'src/screens/List';
import Character from 'src/screens/Character';

const MainStack = createNativeStackNavigator();

const optionsWithoutHeader = {
  header: () => null
};

const RootNavigation = () => (
  <NavigationContainer
  >
    <MainStack.Navigator initialRouteName='List'>
      <MainStack.Screen name="List" component={List} options={optionsWithoutHeader} />
      <MainStack.Screen name="Character" component={Character} options={optionsWithoutHeader} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
