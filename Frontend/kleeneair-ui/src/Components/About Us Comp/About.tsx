import { Box, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import AboutusPage from "../../Pages/AboutUs";
import Widgets from "../DashboardComp/DashboardWidgets";
import ContentContainer from "../DashboardComp/PaperStyleContainer";
import Navigationbar from "../NavigationBarComp/DefaultNavigationBar";

const sectionStyle = {
    height: "65%",
    width: "100%", 
    backgroundImage:
        "url('./Images/splashscreen1.png') ",

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    

};


export default function AboutComp() {
    return (
        <Box style={sectionStyle}>
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
        <Container sx={{ mb: -25, mt: 15, width: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly' }} maxWidth={false}>
            <Widgets title="">
                <img src="./Images/logo.png" style={{ height: 50, width: 50, justifyContent: 'center' }} />
                <Typography variant="h5">Purpose</Typography>
                <Divider variant="middle" sx={{ m: 2 }} />
                <Typography sx={{ justifyContent: 'space-evenly' }} variant="caption">The purpose of KleeneAir is to provide convenient and efficient online scheduling services for smoke emission test centers. By using KleeneAir, test centers can streamline their scheduling processes, saving time and resources, and making it easier for customers to schedule and complete their smoke emission tests. KleeneAir's services help ensure that test centers are able to efficiently and effectively meet their regulatory obligations, while providing a high level of customer service.</Typography>
            </Widgets>

            <Widgets title="">
                <img src="./Images/logo.png" style={{ height: 50, width: 50, justifyContent: 'center' }} />
                <Typography variant="h5">Vision</Typography>
                <Divider variant="middle" sx={{ m: 2 }} />
                <Typography sx={{ justifyContent: 'space-evenly' }} variant="caption">KleeneAir's vision is to become the leading provider of online scheduling services for smoke emission test centers. We aim to continuously improve our platform and services to make it as easy and efficient as possible for test centers to manage their scheduling processes. Through our commitment to innovation and exceptional customer service, we strive to set the standard for excellence in the smoke emission testing industry. Additionally, we hope to contribute to the overall effort to reduce air pollution and improve public health by making it easier for individuals and businesses to comply with smoke emission regulations.</Typography>
            </Widgets>

            <Widgets title="">
                <img src="./Images/logo.png" style={{ height: 50, width: 50, justifyContent: 'center' }} />
                <Typography variant="h5">Purpose</Typography>
                <Divider variant="middle" sx={{ m: 2 }} />
                <Typography sx={{ justifyContent: 'space-evenly' }} variant="caption">KleeneAir's mission is to provide top-quality online scheduling services for smoke emission test centers. Our goal is to help these centers improve their efficiency and productivity by streamlining their scheduling processes, and to provide a convenient and user-friendly platform for customers to schedule and complete their smoke emission tests. We are committed to delivering exceptional customer service and support, and to constantly innovating and improving our platform to meet the evolving needs of the smoke emission testing industry. Through our services, we aim to make a positive impact on the environment and public health by helping to ensure compliance with smoke emission regulations.</Typography>
            </Widgets>
            </Container>
        </Box></Box>

        
        );
}




/*
 *         <ContentContainer headings="">
            <Widgets title="">
                <img src="./Images/logo.png" style={{ height: '15%', width: '15%', justifyContent: 'center' }} />
                <Typography variant="h5">Purpose</Typography>
                <Divider variant="middle" sx={{ m: 2 }} />
                <Typography sx={{ justifyContent: 'center' }} variant="caption">The purpose of KleeneAir is to provide convenient and efficient online scheduling services for smoke emission test centers. By using KleeneAir, test centers can streamline their scheduling processes, saving time and resources, and making it easier for customers to schedule and complete their smoke emission tests. KleeneAir's services help ensure that test centers are able to efficiently and effectively meet their regulatory obligations, while providing a high level of customer service.</Typography>
            </Widgets>     

            <Widgets title="">
                <img src="./Images/logo.png" style={{ height: '15%', width: '15%', justifyContent: 'center' }} />
                <Typography variant="h5">Purpose</Typography>
                <Divider variant="middle" sx={{ m: 2 }} />
                <Typography sx={{ justifyContent: 'center' }} variant="caption">The purpose of KleeneAir is to provide convenient and efficient online scheduling services for smoke emission test centers. By using KleeneAir, test centers can streamline their scheduling processes, saving time and resources, and making it easier for customers to schedule and complete their smoke emission tests. KleeneAir's services help ensure that test centers are able to efficiently and effectively meet their regulatory obligations, while providing a high level of customer service.</Typography>
            </Widgets>  
        </ContentContainer>
 * 
 */ 