

import { Alert, Box, Button, Container, Grid, MenuItem, Paper, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { RestAPI } from "../../Services/restAPI";
import DashboardCardList from "../DashboardComp/DashboardCardList";
import Widgets from "../DashboardComp/DashboardWidgets";
import ContentContainer from "../DashboardComp/PaperStyleContainer";
import UserNavigationbar from "./UserNavigationbar";

export default function UserSetSiteMenu() {
    const paperStyle = { padding: '250px 20px', margin: "40px" };
    const widgetPaper = { padding: '10px 20px', margin: "40px" }

    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, loading, error, target_user, sites] = RestAPI();
    const [customerId, setCustomerID] = useState("");
    const [siteId, setSiteID] = useState("");
    const [status, setStatus] = useState(false); 

    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://localhost:8080/site/getAllSites"
        })
        setStatus(false); 
    }, [status])

    const submission = () => {
        addSiteToUser({
            customerid: parseInt(customerId),
            siteid: parseInt(siteId)
        });

        setStatus(true); 
        console.log("customerid:" + customerId + "siteid: " + siteId);
    }

    return (


        <UserNavigationbar>

            <Container maxWidth={false}>
                <Paper elevation={3} style={paperStyle}>
                    <Typography variant="h4">Select Your Site</Typography>
                    <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                        <TextField sx={{ mt: 2, width: 350 }} id="filled-select-location" label="Your Customer ID" value={customerId} helperText="Your customer ID is" onChange={(event) => setCustomerID(event.target.value)} />
                            <br/>
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

                </Paper>

                {
                    status ? (<Alert severity="success" > Site assignment successful!</Alert>):null                     
                } 

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