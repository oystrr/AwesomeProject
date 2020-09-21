import React from 'react';
import { DataTable } from 'react-native-paper';

export default DataItem = ({ data }) => {
    
    return (
    <>
        {data.map((item) => {
            return (
                <DataTable.Row key={item.key}>
                    <DataTable.Cell>{item.userData.userName}</DataTable.Cell>
                    <DataTable.Cell>{item.userData.country}</DataTable.Cell>
                    <DataTable.Cell>{item.userData.favorite}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.userData.phoneNumber}</DataTable.Cell>
                </DataTable.Row>
            )
        })}
    </>
    );
}