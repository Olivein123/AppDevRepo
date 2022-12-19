import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { RestAPI } from '../../Services/restAPI';

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
    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, cancelBookingToSite, loading, error, target_user,sites, booking] = RestAPI(); 

    useEffect(() => {
        sendRequest({
            method: "GET", 
            url: "http://localhost:8080/customer/getAll"
        })
    }, [])

   

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell align="right">Site</TableCell>
                        <TableCell align="right">Bookings</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(target_user) ? target_user.map((target) => (
                        <TableRow
                            key={target.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {target.username}
                            </TableCell>
                            <TableCell align="right">
                                {Array.isArray(target.sites)?target.sites.map((site:any) => (
                                    <div key={site.siteid}>{site.sitename}</div>
                                )):null}
                            </TableCell>
                            <TableCell align="right">
                                {target.bookings.map((booking:any) => (
                                    <div key={booking.bookingid}>{booking.dateAndTime}</div>
                                ))}
                            </TableCell>
                        </TableRow>
                    )) : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
