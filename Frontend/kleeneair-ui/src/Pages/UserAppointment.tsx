

import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DashboardCardList, { CardInformation } from "../Components/DashboardComp/DashboardCardList";
import Widgets from "../Components/DashboardComp/DashboardWidgets";
import ContentContainer from "../Components/DashboardComp/PaperStyleContainer";
import UserNavigationbar from "../Components/NavigationBarComp/UserNavigationbar";
import { RestAPI } from "../Services/restAPI";

export default function UserAppointmentMenu() {
    const paperStyle = { padding: '250px 20px', margin: "40px" };

    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, loading, error, target_user, sites, booking] = RestAPI(); 
    const [customerId, setCustomerID] = useState(""); 
    const [bookingId, setBookingID] = useState(""); 

    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://localhost:8080/booking/getAllBooking"
            })
    }, [])

    const submission = () => {
        addBookingToSite({
            customerid: parseInt(customerId),
            bookingid: parseInt(bookingId)
        }); 

        console.log("customerid:" + customerId + "bookingid: " + bookingId); 
    }

    return (
            

            <UserNavigationbar>
            <ContentContainer headings="">
                <Widgets title="Available Dates for Booking">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Booking ID</TableCell>
                                    <TableCell align="right">Date and Time</TableCell>                                
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.isArray(booking) ? booking.map((book) => (
                                    <TableRow
                                        key={book.bookingid}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {book.bookingid}
                                        </TableCell>
                                        <TableCell align="right">{book.dateAndTime}</TableCell>

                                    </TableRow>
                                )) : null}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Widgets>


                <Paper elevation={3} style={paperStyle}>
                    <Typography variant="h4">Appoint a schedule!</Typography>
                    <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                        <TextField sx={{ mt: 2, width: 350 }} id="filled-select-location" label="Your Customer ID" helperText="Your customer ID is" onChange={(event)=> setCustomerID(event.target.value)} />                      
                    </Box>

                    <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                        <TextField sx={{ mt: 2, width: 350 }} id="filled-select-location" label="Booking ID" helperText="Select site ID from below" onChange={(event) => setBookingID(event.target.value)} />
                    </Box>
                    <Button sx={{ width: 150, background: '#2656FF' }} variant="contained" onClick={submission }>Submit</Button>
                </Paper>


            </ContentContainer>


            </UserNavigationbar>
        
        
        ); 


}