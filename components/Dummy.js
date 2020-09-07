import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default class Dummy extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            myArr: [],
            index: 0
        }
    }

    _onPressOut() {
        let temp = this.index++
        this.state.myArr.push(temp)
        this.setState({
            myArr: this.state.myArr
        })
    }

    render() {
        let Arr = this.state.myArr.map((a, i) => {
            return <View key={i} style={{ height: 40, borderBottomWidth: 2, borderBottomColor: '#ededed' }}><Text>{a}</Text></View>
        })
        return (
            <>

                <Button
                    title="Add a Text "
                    onPress={() => this._onPressOut()}
                />

                {Arr}
            </>
        )
    }
}