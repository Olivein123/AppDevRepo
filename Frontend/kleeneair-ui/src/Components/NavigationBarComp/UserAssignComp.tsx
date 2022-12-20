

import { Alert, Box, Button, Container,  MenuItem, Paper, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { RestAPI } from "../../Services/restAPI";
import UserNavigationbar from "./UserNavigationbar";

function renderAlert(code: number) {
    switch (code) {
        case 0:
            return <Alert severity="info" sx={{ mt: 2 }}>Did you know, the ozone layer keeps the earth from being warm?</Alert>
        case 1:
            return <Alert severity="error" sx={{ mt: 2 }} >Invalid customer/schedule</Alert >;
        case 2:
            return <Alert severity="success" sx={{ mt: 2 }}>Site is assigned successfully!</Alert>;


    }

}
export default function UserSetSiteMenu() {
    const paperStyle = { padding: '250px 20px', margin: "40px" };
    const widgetPaper = { padding: '10px 20px', margin: "40px" }

    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, cancelBookingToSite, loading, error, target_user, sites] = RestAPI();
    const [customerId, setCustomerID] = useState("");
    const [siteId, setSiteID] = useState("");
    const [code, setCode] = useState(0);


    //FOR AUTH
    const userData = sessionStorage.getItem('user'); 

    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://localhost:8080/site/getAllSites"
        })

        //check to see if user is logged in 
        if (userData) {
            const user = JSON.parse(userData);
            setCustomerID(user.id); 
        } else {
            window.location.assign('http://localhost:3000/login');
        }

    }, [userData])

    const submission = () => {

        if (siteId !== "") {
            addSiteToUser({
                customerid: parseInt(customerId),
                siteid: parseInt(siteId)
            });
            setCode(2);
        } else {
            setCode(1);
        }


        console.log("customerid:" + customerId + "siteid: " + siteId);
    }

    return (


        <UserNavigationbar>

            <Container maxWidth={false}>
                <Paper elevation={3} style={paperStyle}>
                    <Typography variant="h4">Select Your Site</Typography>
                    <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                        <TextField sx={{ mt: 2, width: 350 }} id="filled-select-location" label="Site" select value={siteId} helperText="Select location of available testing centers from below" onChange={(event) => setSiteID(event.target.value)}>
                            {Array.isArray(sites) ? // "?" -> if naay value ang sites then i-map niya ang sites
                                sites.map((site) => (
                                    <MenuItem key={site.siteid} value={site.siteid} >
                                            {site.sitename}, {site.siteaddress}
                                        </MenuItem>
                                    )) : null}
                            </TextField>
                        </Box>
                    <Button sx={{ width: 150, background: '#2656FF' }} variant="contained" onClick={submission}>Submit</Button>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
                        {renderAlert(code)}
                    </Box>
                </Paper>

                

            </Container>





        </UserNavigationbar>


    );


}

/*
 *                      <Widgets title="">
                        {Array.isArray(sites) ? sites.map((site) => <Grid item xs={4} sx={{ whiteSpace: 'nowrap', display: 'inline-block' }}>{

                            <DashboardCardList key={site.siteid} sitename={site.sitename} siteid={site.siteid} image='./Images/emission-center-img-1.jpg' address={site.address} alttext="" />
                        }</Grid>) : null}
                     </Widgets>
 */ 