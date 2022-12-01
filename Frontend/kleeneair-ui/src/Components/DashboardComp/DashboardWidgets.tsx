import { Grid, Paper, Typography } from "@mui/material";
import AppointmentList from "./DashboardAppointmentList";


type WidgetProps = {
    title: string, 
    children: React.ReactNode; 
}


export default function Widgets(props:WidgetProps) {
    
    const paperWidget2 = { padding: '50px 20px', margin: "40px", justifyContent: "left", display: "inline-block" }

    return (
        <Grid sx={{ display: 'inline-block' }}>
            
            <Typography align="left" variant="h6" sx={{ height: '50px', mb: -5, ml: 5 }}>{props.title}</Typography>
                <Paper elevation={2} style={paperWidget2}>
                    {props.children}
                </Paper>
            

        </Grid>
        ); 
}