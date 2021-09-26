import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import DailyPic from './Screens/DailyPic';
import SpaceCrafts from './Screens/SpaceCrafts';
import StarMap from './Screens/StarMap';

const Stack = createStackNavigator();
function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Daily Pics' component={DailyPic}/>
          <Stack.Screen name='Space Crafts' component = {SpaceCrafts}/>
          <Stack.Screen name='Star Maps' component={StarMap}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;