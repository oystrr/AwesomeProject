import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import DataItem from './dataItem';

export default DetailScreen = (props) => {
    let receivedData = props.route.params;

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

                <DataTable.Row>
                    <DataTable.Cell>Scott</DataTable.Cell>
                    <DataTable.Cell>Australia</DataTable.Cell>
                    <DataTable.Cell>Telstra</DataTable.Cell>
                    <DataTable.Cell numeric>0123456789</DataTable.Cell>
                </DataTable.Row>

                <DataItem data={receivedData}/>

            </DataTable>
        </PaperProvider>
    );
}