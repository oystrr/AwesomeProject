import React, { Component } from 'react';
import { TextInput, Button, StyleSheet, Alert } from 'react-native';

export default class DataEntryScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            country: "",
            favorite: "",
            phoneNumber: "",
            dataArray: []
        }
    }

    _handlePress() {
        this.state.dataArray = {
            userName: this.state.userName, country: this.state.country,
            favorite: this.state.favorite, phoneNumber: this.state.phoneNumber
        };
        //navigating to detail screen along with dataArray value. 
        this.props.navigation.navigate('Detail Screen', this.state.dataArray)

    }

    render() {

        return (
            <>
                <TextInput
                    style={styles.input}
                    placeholder='name'
                    onChangeText={(text) => this.setState({ userName: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder='country'
                    onChangeText={(text) => this.setState({ country: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder='favorite phone brand'
                    onChangeText={(text) => this.setState({ favorite: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder='phone number'
                    onChangeText={(text) => this.setState({ phoneNumber: text })}
                    keyboardType='number-pad'
                />
                <Button
                    title="Submit"
                    onPress={() => {
                        this._handlePress()
                    }
                    }
                />
            </>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 10
    }
});