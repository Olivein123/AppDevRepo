

import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
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

    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://localhost:8080/site/getAllSites"
        })
    }, [])

    const submission = () => {
        addSiteToUser({
            customerid: parseInt(customerId),
            siteid: parseInt(siteId)
        });

        console.log("customerid:" + customerId + "siteid: " + siteId);
    }

    return (


        <UserNavigationbar>

            <ContentContainer headings="">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Widgets title="">
                        <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                            <TextField sx={{ mt: 2, width: 350 }} id="filled-select-location" label="Your Customer ID" helperText="Your customer ID is" onChange={(event) => setCustomerID(event.target.value)} />
                        </Box>

                        <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                            <TextField sx={{ mt: 2, width: 350 }} id="filled-select-location" label="Site ID" helperText="Select site ID from below" onChange={(event) => setSiteID(event.target.value)} />
                        </Box>
                        <Button sx={{ width: 150, background: '#2656FF' }} variant="contained" onClick={submission}>Submit</Button>
                    </Widgets>                
                     <Widgets title="">
                        {Array.isArray(sites) ? sites.map((site) => <Grid item xs={4} sx={{ whiteSpace: 'nowrap', display: 'inline-block' }}>{

                            <DashboardCardList key={site.siteid} sitename={site.sitename} siteid={site.siteid} image='./Images/emission-center-img-1.jpg' address={site.address} alttext="" />
                        }</Grid>) : null}
                     </Widgets>

                </Box>
            </ContentContainer>


        </UserNavigationbar>


    );


}