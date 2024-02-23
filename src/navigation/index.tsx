import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PeopleList from 'src/screens/PeopleList';
import Person from 'src/screens/Person';

const MainStack = createNativeStackNavigator();

const optionsWithoutHeader = {
  header: () => null
};

const RootNavigation = () => (
  <NavigationContainer
  >
    <MainStack.Navigator initialRouteName='PeopleList'>
      <MainStack.Screen name="PeopleList" component={PeopleList} options={optionsWithoutHeader} />
      <MainStack.Screen name="Person" component={Person} options={optionsWithoutHeader} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
