import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    testingcenter: string,
    date: string, 
    time: string
) {
    return {testingcenter, date, time };
}

const rows = [
    createData('Y Center', '10/25/2022', '02:45 PM'),
    createData('Y Center', '10/25/2022', '02:45 PM'),
    createData('Y Center', '10/25/2022', '02:45 PM')

];

export default function AppointmentList() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Testing Center</TableCell>
                        <TableCell align="right">Scheduled Dates</TableCell>
                        <TableCell align="right">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.testingcenter}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.testingcenter}
                            </TableCell>                            
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
