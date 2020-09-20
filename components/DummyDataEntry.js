import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Alert } from 'react-native';

const DummyDataEntry = (props) => {
    const [userName, setUserName] = useState('');
    const [country, setCountry] = useState('');
    const [favorite, setFavorite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dataObject, setDataObject] = useState({userName:'', country:'', favorite:'', phoneNumber:''});

    const pressHandler = () =>{
        props.navigation.navigate('Detail Screen', dataObject)
    }

    return (
        <>
            <TextInput
                    style={styles.inputDummy}
                    placeholder='name'
                    onChangeText={(text) => setDataObject({userName: text})}
                />
                <TextInput
                    style={styles.inputDummy}
                    placeholder='country'
                    onChangeText={(text) => setDataObject({country: text})}
                />
                <TextInput
                    style={styles.inputDummy}
                    placeholder='favorite phone brand'
                    onChangeText={(text) => setDataObject({favorite: text})}
                />
                <TextInput
                    style={styles.inputDummy}
                    placeholder='phone number'
                    onChangeText={(text) => setDataObject({phoneNumber: text})}
                    keyboardType='number-pad'
                />
                <Button
                    title="Submit"
                    onPress={() => pressHandler()}
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