import Grid from '@mui/material/Grid';
import RegistrationInnerContext from './UserRegistrationInnerContext';
import CSS from 'csstype';
import { Box, Button, Container, Paper, Typography } from '@mui/material';

type ContainerProps = {
    headings: string, 
    children: React.ReactNode;
}

//Join Us Logo styling
const divStyling:CSS.Properties = {
    //Distance from the Navbar
    marginTop:"100px",
    marginLeft:"60px"
}

const sectionStyle = {
    height: "100vh", 
    backgroundImage:
        "url('./Images/splashscreen1.png') ",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
};

//Registration Paper
function IrregularContentContainer(props:ContainerProps) {
    const paperStyle: CSS.Properties = {
        padding: '35px' , margin:'40px',
        borderRadius:"5rem 0rem 0em 5rem/15rem",
        height:"390px",
        width:"450px"
    }
    return (
        <Container className="paperEffect" maxWidth={false}>
            <Paper elevation={5} style={paperStyle }>
                <Typography variant="h6" sx={{ marginLeft:'20px', fontWeight:"bold"}}>{props.headings}</Typography>
                {props.children}
            </Paper>
        </Container >
        ); 
}

export default function RegisterUser() {
    return (
        <Box style={sectionStyle}>
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <Grid container>
                <Grid item xs={6}>
                    <div style={divStyling}>
                    <img src="./Images/logo.png" style={{ height: 150, width: 150 }} />
                    <Typography variant="h6" sx={{fontWeight:"bold"}} noWrap component="div">
                        Join Us
                        <Typography variant="subtitle1" sx={{ mb: 2, mt: -1 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Typography>
                    <Button sx={{transform:"scale(0.8)"}} variant="contained" 
                        onClick={()=>window.location.href='/about-us'}>About Us</Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <IrregularContentContainer headings="Registration">
                        <RegistrationInnerContext />           
                    </IrregularContentContainer>
                </Grid>
            </Grid>
        </Box>
        </Box>
    );
}