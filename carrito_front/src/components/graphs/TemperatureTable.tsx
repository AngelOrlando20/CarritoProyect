import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useAtom } from 'jotai';
import { TemperatureData } from '../../state/data';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'temperatura',
      headerName: 'Temperatura (°C)',
      width: 150,
      editable: true,
    },
    {
      field: 'fecha',
      headerName: 'Fecha de Registro',
      width: 300,
      editable: true,
      valueFormatter: (value) => {
        return new Date(value.value).toLocaleTimeString() + " " + new Date(value.value).toLocaleDateString()
      },
    },
    /*
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    */
  ];

export default function TemperatureTable() {
    const [rowsData] = useAtom(TemperatureData);

    return (<Box maxWidth={'auto'}>
        <DataGrid
        rows={rowsData}
        columns={columns}
        initialState={{
            pagination: {
            paginationModel: {
                pageSize: 5,
            },
            },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        />
    </Box>)
}