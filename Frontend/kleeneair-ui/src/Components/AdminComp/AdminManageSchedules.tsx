import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { RestAPI } from "../../Services/restAPI";
import AdminNavigationBar from "../NavigationBarComp/AdminNavBar";



export default function AdminAvailableSchedule() {
    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, cancelBookingToSite, loading, error, target_user, sites, booking] = RestAPI();
    const paperStyle = { padding: '250px 20px', margin: "40px", justifyContent: "space-evenly" }
    const [dateandtime, setDateAndTime] = useState(""); 
    const [date, setDate] = useState(""); 
    const [time, setTime] = useState("");
    const [hours, setHours] = useState(0);

    const createSchedule = () => {
        console.log(dateandtime); 
        newBookingSchedule({
            bookingid:-1,
            dateAndTime: dateandtime
            })
    }



    return (
        <AdminNavigationBar>
            <Paper elevation={3} style={paperStyle}>
                <Typography variant="h4">Create Available Booking Schedule</Typography>
                <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                    <TextField
                        id="datetime-local"
                        label="Set appointment"
                        type="datetime-local"
                        onChange={(event) => setDateAndTime(event.target.value)}
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    
                </Box>
                <Button sx={{ width: 150, background: '#2656FF' }} variant="contained" onClick={createSchedule }>Submit</Button>
            </Paper>

        </AdminNavigationBar>
        
        );
}

////<TextField sx={{ mt: 2, width: 350 }} id="filled-select-location" label="" helperText="Format sameple:'2019-03-28T09:30:00'" onChange={(event) => setDateAndTime(event.target.value)} />                      