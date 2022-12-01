import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    vehiclemodel: string,
    prevtest: string,
    time: string

) {
    return {vehiclemodel, prevtest, time };
}

const rows = [
    createData('2019 Nissan Navarra', '6/25/2022', '03:00 PM'),
    createData('2019 Nissan Navarra', '6/25/2022', '03:00 PM'),
    createData('2019 Nissan Navarra', '6/25/2022', '03:00 PM')

];

export default function RegisteredVehicleList() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Vehicle Model</TableCell>
                        <TableCell align="right">Prior Test Date</TableCell>
                        <TableCell align="right">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.vehiclemodel}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.vehiclemodel}
                            </TableCell>                            
                            <TableCell align="right">{row.prevtest}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
