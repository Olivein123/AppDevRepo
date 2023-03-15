import Grid from '@mui/material/Grid';
import Widgets from '../DashboardComp/DashboardWidgets';
import ContentContainer from '../DashboardComp/PaperStyleContainer';
import RegistrationInnerContext from './UserRegistrationInnerContext';
import CSS from 'csstype';
import { Container, Paper, Typography } from '@mui/material';

type ContainerProps = {
    headings: string, 
    children: React.ReactNode;
}

function IrregularContentContainer(props:ContainerProps) {
    const paperStyle: CSS.Properties = {
        padding: '35px' , margin:'40px',
        borderRadius:"5rem 0rem 0em 5rem/15rem",
        float:"right",
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
        <IrregularContentContainer headings="Registration">
                <RegistrationInnerContext />           
        </IrregularContentContainer>
    );
}