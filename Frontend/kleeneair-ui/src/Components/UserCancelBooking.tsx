import { Container, Paper, Typography, Box, TextField, MenuItem, Button,Alert, TableContainer, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import { useEffect, useState } from "react";
import { RestAPI } from "../Services/restAPI";
import UserNavigationbar from "./NavigationBarComp/UserNavigationbar";


function renderAlert(code: number) {
    switch (code) {
        case 0:
            return <Alert severity="info" sx={{ mt: 2}}>Did you know, the ozone layer keeps the earth from being warm?</Alert>
        case 1:
            return <Alert severity="error" sx={{ mt: 2 }} >Invalid customer/booking</Alert >;
        case 2:
            return <Alert severity="success" sx={{ mt: 2 }}>Schedule successfully cancelled!</Alert>;


    }

}

export type Query = {
    username: string;
    site: string;
    bookings: string;
}


export default function CancelBookingMenu() {
    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, cancelBookingToSite, loading, error, target_user, sites, booking] = RestAPI(); 
    const paperStyle = { padding: '250px 20px', margin: "40px" };
    const [status, setStatus] = useState(false); 
    const [customerId, setCustomerID] = useState("");
    const [bookingId, setBookingID] = useState<number>(); 
    const [code, setCode] = useState(0); 

    //FOR AUTH
    const userData = sessionStorage.getItem('user'); 
    const [loggedUser, setLoggedUser] = useState<Query | null>(null); 


    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://localhost:8080/customer/getAll"
        })

        if (userData) {
            const user = JSON.parse(userData);
            setLoggedUser(user);
            setCustomerID(user.id); 
        } else {
            window.location.assign('http://localhost:3000/login');
        }

    }, [bookingId])


    /*
    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://localhost:8080/booking/getAllBooking"
        })
        //check if user is logged in
        if (userData) {
            const user = JSON.parse(userData);
            setCustomerID(user.id); 
        } else {
            window.location.assign('http://localhost:3000/login');
        }
    }, [status])*/

    const submission = (bookingID: number) => {

        setBookingID(bookingID); 
        if (customerId !== "" && bookingId !== null) {
            setCode(2)
            cancelBookingToSite({
                customerid: parseInt(customerId),
                bookingid: bookingID,
                
            });
            console.log("Customer ID: " + customerId + " Booking ID: " + bookingId); 
           
        } else {
            setCode(1)
        }



        

    }
    return (
        <UserNavigationbar>

            <Container maxWidth={false}>
                
                <Paper elevation={3} style={paperStyle}>
                    <Typography variant="h4" sx={{mb:5} }>Cancel Booking</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>User</TableCell>
                                    <TableCell align="right">Site</TableCell>
                                    <TableCell align="right">Bookings</TableCell>
                                    <TableCell align="right">Cancel</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.isArray(target_user) ? target_user
                                    .filter((target: any) => loggedUser && target.username === loggedUser.username)
                                    .map((target) => (
                                        <TableRow
                                            key={target.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {target.username}
                                            </TableCell>
                                            <TableCell align="right">
                                                {Array.isArray(target.sites) ? target.sites.map((site: any) => (
                                                    <div key={site.siteid}>{site.sitename}</div>
                                                )) : null}
                                            </TableCell>
                                            <TableCell align="right">
                                                {target.bookings.map((booking: any) => (
                                                    <div key={booking.bookingid}><Box sx={{m:2}}>{booking.dateAndTime}</Box></div>
                                                ))}
                                            </TableCell>
                                            <TableCell align="right">
                                                {target.bookings.map((booking: any) => (
                                                    <div key={booking.bookingid} onClick={() => submission(booking.bookingid)}><Button>Delete</Button></div>
                                                ))}
                                            </TableCell>
                                        </TableRow>
                                    )) : null}
                            </TableBody>
                        </Table>
                    </TableContainer>                    
                    <Button sx={{ width: 180, ml: 2 ,mt:2 }} href="/user-appointments">Book Appointment?</Button>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
                        {renderAlert(code)}
                    </Box>
                   


                </Paper>



            </Container>


        </UserNavigationbar>

    );
}

/*
 * 
 *                     <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                        <TextField sx={{ mt: 2, width: 350 }} id="filled-select-schedule" label="Schedule" select helperText="Select date and time to cancel." value={bookingId} onChange={(event) => setBookingID(event.target.value)} >
                            {
                                Array.isArray(booking) ? booking.map((booked) => (
                                    <MenuItem key={booked.bookingid} value={booked.bookingid}>{booked.dateAndTime}</MenuItem>
                                    )):null
                            }
                        </TextField>
                    </Box>
                    <Button sx={{ width: 150, background: '#2656FF' }} variant="contained" onClick={submission}>Submit</Button>
                    <Button sx={{ width: 180, ml: 2 }} href="/user-appointments">Book Appointment?</Button>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', mt:5} }>
                        {renderAlert(code)}
                    </Box>
 * 
 * 
 * */
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