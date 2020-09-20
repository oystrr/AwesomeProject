import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { DataTable } from 'react-native-paper';

export default DataItem = ({data}) => {
    return (
        <DataTable.Row>
                    <DataTable.Cell>{data.userName}</DataTable.Cell>
                    <DataTable.Cell>{data.country}</DataTable.Cell>
                    <DataTable.Cell>{data.favorite}</DataTable.Cell>
                    <DataTable.Cell numeric>{data.phoneNumber}</DataTable.Cell>
        </DataTable.Row>
    );
}