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
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' },
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' }
]



export default function DashboardContainer() {
    

    return (
        <><Container>
            <Typography align="left" variant="h5" sx={{ mt: 5, mb: -5, ml: 5 }}>Dashboard</Typography>
        </Container>

        <ContentContainer>
            <Widgets>
                    <AppointmentList />
                </Widgets>

                <Widgets>
                    <RegisteredVehicleList/>
                </Widgets>
            <Divider variant="middle" />
            <Typography variant="h4" sx={{ margin: "2%" }}>Nearby Testing Centers</Typography>
            <Divider variant="middle" />

            <Box component="form" sx={{ m: 5 }} noValidate autoComplete="off">
                {CardList.map((item, i) => <Grid item xs={4} sx={{ whiteSpace: 'nowrap', display: 'inline-block' }}><DashboardCardList key={i} sitename={item.sitename} image={item.image} address={item.address} alttext={item.alttext} /></Grid>
                )}
            </Box>
        </ContentContainer></>
        



           
        

       
            
   
       ); 



}

//<Grid container spacing={3} sx={{ width: '90%', margin: '0px' }}>