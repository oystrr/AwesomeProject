import * as React from 'react';
import { Button, Alert } from 'react-native';

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

      <Button
        title="Dummy Data entry screen"
        onPress={() =>
          navigation.navigate('DummyDataEntry', { name: 'DummyDataEntry' })
        }
      />

    </>
  );
};

export default HomeScreen;