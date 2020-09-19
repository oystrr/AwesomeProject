import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Alert } from 'react-native';

const DummyDataEntry = (props) => {
    const [userName, setUserName] = useState('');
    const [country, setCountry] = useState('');
    const [favorite, setFavorite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dataArray, setDataArray] = useState([]);

    return (
        <>
            <TextInput
                    style={styles.inputDummy}
                    placeholder='name'
                    onChangeText={(text) => setUserName(text)}
                />
                <TextInput
                    style={styles.inputDummy}
                    placeholder='country'
                    onChangeText={(text) => setCountry(text)}
                />
                <TextInput
                    style={styles.inputDummy}
                    placeholder='favorite phone brand'
                    onChangeText={(text) => setFavorite(text)}
                />
                <TextInput
                    style={styles.inputDummy}
                    placeholder='phone number'
                    onChangeText={(text) => setPhoneNumber(text)}
                    keyboardType='number-pad'
                />
                <Button
                    title="Submit"
                    onPress={() => {
                        setDataArray(userName, country, favorite, phoneNumber)
                        //console.log("name is " + userName )
                        props.navigation.navigate('Detail Screen', dataArray)
                    }
                    }
                />
        </>
    );
}

export default DummyDataEntry;

const styles = StyleSheet.create({
    inputDummy: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 10
    }
});