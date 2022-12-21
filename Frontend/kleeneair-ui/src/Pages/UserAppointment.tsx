

import { Alert, Box, Button, Container, MenuItem, Paper, Snackbar, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import UserNavigationbar from "../Components/NavigationBarComp/UserNavigationbar";
import { RestAPI } from "../Services/restAPI";


function renderAlert(code: number) {
    switch (code) {
        case 0:
            return <Alert severity="info" sx={{ mt: 2 }}>Did you know, the ozone layer keeps the earth from being warm?</Alert>
        case 1:
            return <Alert severity="error" sx={{ mt: 2 }} >Invalid customer/schedule</Alert >;
        case 2:
            return <Alert severity="success" sx={{ mt: 2 }}>Schedule is booked successfully!</Alert>;


    }

}

export type Query = {
    username: string;
    site: string;
    dateAndTime: string
}

export default function UserAppointmentMenu() {
    const paperStyle = { padding: '250px 20px', margin: "40px" };

    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, cancelBookingToSite, loading, error, target_user, sites, booking] = RestAPI();
    const [customerId, setCustomerID] = useState("");
    const [bookingId, setBookingID] = useState("");
    const [code, setCode] = useState(0);

    //FOR AUTH
    const userData = sessionStorage.getItem('user');
    const [loggedUser, setLoggedUser] = useState<Query | null>(null);

    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://localhost:8080/booking/getAllBooking"
        })

        //check to see if user is logged in 
        if (userData) {
            const user = JSON.parse(userData);
            setLoggedUser(user);
            setCustomerID(user.id);

        } else {
            window.location.assign('http://localhost:3000/login');
        }
    }, [code]);


    const submission = () => {
        if (customerId !== "" && bookingId !== "") {
            setCode(2);
            addBookingToSite({
                customerid: parseInt(customerId),
                bookingid: parseInt(bookingId)
            })
        } else {
            setCode(1);
        }
        console.log("customerid:" + customerId + "bookingid: " + bookingId);
    }


 
        return (

            <UserNavigationbar>
                <Container maxWidth={false}>
                    <Paper elevation={3} style={paperStyle}>
                        <Typography variant="h4">Select Your Testing Schedule</Typography>

                        <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off">
                            <TextField sx={{ mt: 2, width: 350 }} id="filled-select-location" label="Schedule" select helperText="Select site ID from below" value={bookingId} onChange={(event) => setBookingID(event.target.value)}>
                                {
                                Array.isArray(booking)?booking.map((booked) => (
                                        <MenuItem key={booked.bookingid} value={booked.bookingid}>{booked.dateAndTime}</MenuItem>
                                    )):null
                                }
                            </TextField>

                        </Box>
                        <Button sx={{ width: 150, background: '#2656FF' }} variant="contained" onClick={submission}>Submit</Button>
                        <Button sx={{ width: 150, ml: 2 }} href="/cancel-booking">Cancel booking?</Button>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
                            {renderAlert(code)}
                        </Box>
                    </Paper>



                </Container>


            </UserNavigationbar>


        );


 
}