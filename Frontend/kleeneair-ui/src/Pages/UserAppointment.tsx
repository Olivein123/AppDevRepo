

import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import DashboardCardList, { CardInformation } from "../Components/DashboardComp/DashboardCardList";
import Widgets from "../Components/DashboardComp/DashboardWidgets";
import ContentContainer from "../Components/DashboardComp/PaperStyleContainer";
import UserNavigationbar from "../Components/NavigationBarComp/UserNavigationbar";
import { RestAPI } from "../Services/restAPI";





const CardList: CardInformation[] = [
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' },
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' },
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' },
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' },
    { sitename: 'Y Center', image: './Images/emission-center-img-1.jpg', address: 'Labangon Cebu City', alttext: 'Y center' }


]


export default function UserAppointmentMenu() {

    return (
        <>
            <UserNavigationbar>
                <ContentContainer headings="Appointment Manager">
                    <Typography variant="h5" sx={{ mb: -6, mt: 5 }}>Approved Scheduled Dates</Typography>
                    <Widgets title="">
                        <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off">
                            {CardList.map((item, i) => <Grid item xs={4} sx={{ whiteSpace: 'nowrap', display: 'inline-block' }}></Grid>
                            )}
                        </Box>
                    </Widgets>

                </ContentContainer>
            </UserNavigationbar>
        </>
        
        ); 


}