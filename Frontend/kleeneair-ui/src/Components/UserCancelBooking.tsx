import { Container, Paper, Typography, Box, TextField, MenuItem, Button,Alert} from "@mui/material";
import { useEffect, useState } from "react";
import { RestAPI } from "../Services/restAPI";
import UserNavigationbar from "./NavigationBarComp/UserNavigationbar";

export default function CancelBookingMenu() {
    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, cancelBookingToSite, loading, error, target_user, sites, booking] = RestAPI(); 
    const paperStyle = { padding: '250px 20px', margin: "40px" };
    const [status, setStatus] = useState(false); 
    const [customerId, setCustomerID] = useState("");
    const [bookingId, setBookingID] = useState(""); 

    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://localhost:8080/booking/getAllBooking"
        })
        setStatus(false);
    }, [status])

    const submission = () => {
        cancelBookingToSite({
            customerid: parseInt(customerId),
            bookingid: parseInt(bookingId)
        });


        console.log("Customer ID: " + customerId + " Booking ID: " + bookingId); 
        setStatus(true); 
    }
    return (
        <UserNavigationbar>
            <Container maxWidth={false}>
                <Paper elevation={3} style={paperStyle}>
                    <Typography variant="h4">Cancel Booking</Typography>
                    <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                        <TextField sx={{ mt: 2, width: 350 }} id="filled-select-customer" label="Your Customer ID" helperText="Your customer ID is" onChange={(event) => setCustomerID(event.target.value)} value={customerId} />
                    </Box>

                    <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                        <TextField sx={{ mt: 2, width: 350 }} id="filled-select-schedule" label="Schedule" select helperText="Select date and time to cancel." value={bookingId} onChange={(event) => setBookingID(event.target.value)} >
                            {
                                Array.isArray(booking) ? booking.map((booked) => (
                                    <MenuItem key={booked.bookingid} value={booked.bookingid}>{booked.dateAndTime}</MenuItem>
                                    )):null
                            }
                        </TextField>
                    </Box>
                    <Button sx={{ width: 150, background: '#2656FF' }} variant="contained" onClick={submission}>Submit</Button>
                </Paper>

                {
                    status ? (<Alert severity="success" > Site assignment successful!</Alert>) : null
                }

            </Container>


        </UserNavigationbar>

    );
}

/*
                     <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                        <TextField sx={{ mt: 2, width: 350 }} id="filled-select-location" label="Your Customer ID" helperText="Your customer ID is" />
                    </Box>

                    <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                        <TextField sx={{ mt: 2, width: 350 }} id="filled-select-location" label="Schedule" select helperText="Select site ID from below"  >
                            Hello
  </TextField>
  </Box>
   <Button sx={{ width: 150, background: '#2656FF' }} variant="contained">Submit</Button>
 * */