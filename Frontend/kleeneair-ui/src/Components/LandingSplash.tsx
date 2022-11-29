import { WidthFull } from "@mui/icons-material";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";


const sectionStyle = {
    
    height: "100vh", 

    backgroundImage:
        "url('./Images/splashscreen1.png') ",

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
    
};

export default function LandingSplash() {
    return (
        <Box>
            <Box style={sectionStyle}>
            <Box sx={{
                width: '100%', 
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography>
                    <Typography sx={{mb:-3}}><b> Seamless Emission Testing Appointment Scheduler</b></Typography>
                        <Typography sx={{ mb: -2 }}><h1>Never miss your smoke emission tests with our solution.</h1></Typography>

                        <Grid container spacing={2} justifyContent="center">
                            <Grid sx={{ textAlign: 'center' }} mr={2 }>
                                <Button href="/register" variant="contained" sx={{ bgcolor: 'darkblue' } }>Get Started</Button>
                            </Grid>
                            <Grid >
                                <Button variant="contained">About Us</Button>
                            </Grid>
                        
                    </Grid>


                        
                </Typography>

                </Box>
            </Box>

            
            
                    
                
        </Box>
        ); 
}



/*
 * 
 *                 
 *             <Grid container spacing={2}>
                    <Grid item xs={25}>
                        <Typography sx={{ position: "absolute", color: "black", top: "25%", left: "35%", transform: "translateX(-50%" }}>
                            <h4>Seamless Emission Testing Appointment Scheduler</h4>
                            <Typography sx={{ mt: -3, mr: 10, justifyContent: 'right' }}>Never miss your smoke emission tests with our solution.</Typography>
                        </Typography>
                        <img src="./Images/splashscreen-1.jpg" style={{height:'100%', width:'100%'}} />
                    </Grid>
                </Grid>
 *                 
 *                 <Typography sx={{ position: "absolute", color: "black", top: "25%", left: "35%", transform: "translateX(-50%" }}>
                    <h4>Seamless Emission Testing Appointment Scheduler</h4>
                    <Typography sx={{mt:-3, mr: 10, justifyContent:'right'}}>Never miss your smoke emission tests with our solution.</Typography>                    
                </Typography>
 */ 