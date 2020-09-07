/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DataEntryScreen from './DataEntryScreen';
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

//stacking all the screens in MainApp component
const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome To Main app' }}
        />
        <Stack.Screen name="DataEntryScreen" component={DataEntryScreen} />
        <Stack.Screen name="Detail Screen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;