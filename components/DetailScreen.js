import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { DataTable } from 'react-native-paper';

export default DetailScreen = (props) => {
    let receivedData = props.route.params;
    console.log(receivedData);
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

                {/* {Arr} */}

                {/*statically updating the value of received user input data*/}
                <DataTable.Row>
                    <DataTable.Cell>{receivedData.userName}</DataTable.Cell>
                    <DataTable.Cell>{receivedData.country}</DataTable.Cell>
                    <DataTable.Cell>{receivedData.favorite}</DataTable.Cell>
                    <DataTable.Cell numeric>{receivedData.phoneNumber}</DataTable.Cell>
                </DataTable.Row>

                {/* <DataTable.Pagination
                            page={1}
                            numberOfPages={3}
                            onPageChange={page => {
                                console.log(page);
                            }}
                            label="1-2 of 6"
                        /> */}
            </DataTable>
        </PaperProvider>
    );
}