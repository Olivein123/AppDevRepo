import { Box, Button, Container, Divider, Grid, MenuItem, Paper, TextField, Typography } from "@mui/material"
import AppointmentList from "./DashboardAppointmentList";
import DashboardCardList, { CardInformation } from "./DashboardCardList";
import RegisteredVehicleList from "./DashboardRegisteredVehicleList";
import Widgets from "./DashboardWidgets";

import ContentContainer from "./PaperStyleContainer";


const CardList: CardInformation[] = [
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' },
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' },
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' },
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' },
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' }


]



export default function DashboardContainer() {
    

    return (
        <ContentContainer headings="Dashboard">                
                <Widgets title="Scheduled Appointment">
                    <AppointmentList />
                </Widgets>

            <Widgets title="Registered Vehicles">
                    <RegisteredVehicleList/>
                </Widgets>

            <Divider variant="middle" />
            
                <Typography variant="h6" sx={{ mb: -6, mt: 5 }}>Nearby Testing Centers</Typography>
                <Widgets title="">                    
                    <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off">
                        {CardList.map((item, i) => <Grid item xs={4} sx={{ whiteSpace: 'nowrap', display: 'inline-block' }}><DashboardCardList key={i} sitename={item.sitename} image={item.image} address={item.address} alttext={item.alttext} /></Grid>
                        )}
                    </Box>
                </Widgets>

        </ContentContainer>
        



           
        

       
            
   
       ); 



}

//<Grid container spacing={3} sx={{ width: '90%', margin: '0px' }}>