import * as React from 'react';
import { Button } from 'react-native';

//navigating to respective Screens/components from HomeScreen
const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title="DataEntryScreen"
        color="#f194ff"
        onPress={() =>
          navigation.navigate('DataEntryScreen', { name: 'DataEntryScreen' })
        }
      />

      <Button
        title="Detail Screen"
        onPress={() =>
          navigation.navigate('Detail Screen', { name: 'Detail Screen' })
        }
      />

    </>
  );
};

export default HomeScreen;