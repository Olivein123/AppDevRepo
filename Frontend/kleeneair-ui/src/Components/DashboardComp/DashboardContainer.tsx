import { Box, Divider, Grid, Typography } from "@mui/material"
import { useEffect } from "react";
import { RestAPI } from "../../Services/restAPI";
import AppointmentList from "./DashboardAppointmentList";
import DashboardCardList, { CardInformation } from "./DashboardCardList";
import Widgets from "./DashboardWidgets";

import ContentContainer from "./PaperStyleContainer";



export default function DashboardContainer() {
    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, cancelBookingToSite, loading, error, target_user, sites] = RestAPI();
    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://localhost:8080/site/getAllSites"
        })
    }, [])


    return (
        <ContentContainer headings="Dashboard">                
                <Widgets title="Scheduled Appointment by Users">
                    <AppointmentList />
            </Widgets>
            <Divider variant="middle" />
            
                <Typography variant="h6" sx={{ mb: -6, mt: 5 }}>Nearby Testing Centers</Typography>
                <Widgets title="">                    
                    <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off">
                    {Array.isArray(sites) ? sites.map((site) => <Grid item xs={4} sx={{ whiteSpace: 'nowrap', display: 'inline-block' }}>{

                        <DashboardCardList key={site.siteid} sitename={site.sitename} siteid={site.siteid} image='./Images/emission-center-img-1.jpg' address={site.siteaddress} alttext="" />
                    }</Grid>) : null}
                    </Box>
                </Widgets>

        </ContentContainer>
        



           
        

       
            
   
       ); 



}

//<Grid container spacing={3} sx={{ width: '90%', margin: '0px' }}>

/*            <Widgets title="Registered Vehicles">
                    <RegisteredVehicleList/>
                </Widgets>*/