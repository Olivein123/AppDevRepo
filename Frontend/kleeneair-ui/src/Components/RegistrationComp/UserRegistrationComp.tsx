import Grid from '@mui/material/Grid';
import Widgets from '../DashboardComp/DashboardWidgets';
import ContentContainer from '../DashboardComp/PaperStyleContainer';
import RegistrationInnerContext from './UserRegistrationInnerContext';
import CSS from 'csstype';
import { Container, Paper, Typography } from '@mui/material';



const test: CSS.Properties = {
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,50%)",
    backgroundSize:"200px 200px",
    borderRadius:"80% 20% 32% 68% / 58% 22% 78% 42%"

}

type ContainerProps = {
    headings: string, 
    children: React.ReactNode;
}

function IrregularContentContainer(props:ContainerProps) {
    const paperStyle: CSS.Properties = {
        padding: '35px' , margin:'40px',
        borderRadius:"5rem 0rem 0em 5rem/15rem",
        float:"right",
        height:"400px",
        width:"600px"

    }

    return (
        <Container className="paperEffect" maxWidth={false}>
            <Typography align="left" variant="h6" sx={{ mt: 5, mb: -4, ml: 5 }}>{props.headings}</Typography>
            <Paper elevation={5} style={paperStyle }>
                {props.children}
            </Paper>

        </Container >
       
        ); 

}

export default function RegisterUser() {
    return (
        <IrregularContentContainer headings="Registration Page">
                <RegistrationInnerContext />           
        </IrregularContentContainer>
    );
}