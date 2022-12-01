import { Grid, Paper, Typography } from "@mui/material";
import AppointmentList from "./DashboardAppointmentList";


type WidgetProps = {
    title: string, 
    children: React.ReactNode; 
}


export default function Widgets(props:WidgetProps) {
    

    return (
        <Grid sx={{ display: 'inline-block' }}>
            <Typography align="left" variant="h6" sx={{height: '50px', mb: -2, ml: 5 }}>{props.title}</Typography>
            <Paper elevation={1} sx={{display:'inline-block', p: 2, m: 2} }>
                    {props.children}
                </Paper>
            

        </Grid>
        ); 
}