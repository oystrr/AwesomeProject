import * as React from 'react';
import { Button, Alert } from 'react-native';

//navigating to respective Screens/components from HomeScreen
const HomeScreen = ({ navigation }) => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
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
        title="Show alert"
        onPress={
          createTwoButtonAlert
        }
      />

      <Button
        title="Dummy Data entry screen"
        onPress={() =>
          navigation.navigate('DummyDataEntry', {name: 'DummyDataEntry'})
        }
      />

    </>
  );
};

export default HomeScreen;