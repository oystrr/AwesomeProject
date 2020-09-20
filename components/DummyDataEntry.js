import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Alert } from 'react-native';

const DummyDataEntry = (props) => {
    const [userName, setUserName] = useState('');
    const [country, setCountry] = useState('');
    const [favorite, setFavorite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dataObject, setDataObject] = useState({userName:'swarup', country:'nepal', favorite:'ncell', phoneNumber:'0123'});

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
        padding: 16,
        marginTop: 16,
        marginStart: 10,
        marginEnd: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
});