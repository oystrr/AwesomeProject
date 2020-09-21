import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import DataItem from './dataItem';

export default DetailScreen = (props) => {
    let receivedData = props.route.params;

    const [userDataDemo, setUserDataDemo] = useState({ userName: 'swarup', country: 'nepal', favorite: 'ncell', phoneNumber: '0123' });
    const [userDataDemoSecond, setUserDataDemoSecond] = useState({ userName: 'second', country: 'mexico', favorite: 'ncell', phoneNumber: '0123' });
    const [userDataGroup, setUserDataGroup] = useState([
        { userData: userDataDemo, key: '1' },
        { userData: userDataDemoSecond, key: '2' }
    ]);

    // const submitHandler = (userData) => {
    //     setUserDataGroup((prevUserDataGroup)=>{
    //         return[
    //             {userData: userData, key: Math.random().toString()},
    //             ...prevUserDataGroup
    //         ];
    //     })
    // }

    return (
        <PaperProvider>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title>Country</DataTable.Title>
                    <DataTable.Title>Favorite</DataTable.Title>
                    <DataTable.Title numeric>Phone</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>John Doe</DataTable.Cell>
                    <DataTable.Cell>Krakozhia</DataTable.Cell>
                    <DataTable.Cell>Telstra</DataTable.Cell>
                    <DataTable.Cell numeric>0123456789</DataTable.Cell>
                </DataTable.Row>



                {/* {userDataGroup.map((item)=>{
                    return(
                        <DataTable.Row key={item.key}>
                            <DataTable.Cell>{item.userData.userName}</DataTable.Cell>
                            <DataTable.Cell>{item.userData.country}</DataTable.Cell>
                            <DataTable.Cell>{item.userData.favorite}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.userData.phoneNumber}</DataTable.Cell>
                        </DataTable.Row>
                    )
                })} */}

                <DataItem data={userDataGroup} />

                <DataTable.Row>
                    <DataTable.Cell>{receivedData.userName}</DataTable.Cell>
                    <DataTable.Cell>{receivedData.country}</DataTable.Cell>
                    <DataTable.Cell>{receivedData.favorite}</DataTable.Cell>
                    <DataTable.Cell numeric>{receivedData.phoneNumber}</DataTable.Cell>
                </DataTable.Row>

            </DataTable>
        </PaperProvider>
    );
}