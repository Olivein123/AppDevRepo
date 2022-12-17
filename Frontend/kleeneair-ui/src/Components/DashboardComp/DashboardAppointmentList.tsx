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
    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, loading, error, target_user,sites, booking] = RestAPI(); 

    useEffect(() => {
        sendRequest({
            method: "GET", 
            url: "http://localhost:8080/booking/getAllBooking"
        })
    }, [])

    /*
    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://localhost:8080/site/getAllSites"
        })
    }, [])*/
   

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Testing Center</TableCell>
                        <TableCell align="right">Booking ID</TableCell>
                        <TableCell align="right">Scheduled Dates</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(booking)?booking.map((booked) => (
                        <TableRow
                            key={booked.bookingid}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {booked.sitename}
                            </TableCell>     
                            <TableCell align="right">{booked.bookingid}</TableCell>
                            <TableCell align="right">{booked.dateAndTime}</TableCell>

                        </TableRow>
                    )): null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
