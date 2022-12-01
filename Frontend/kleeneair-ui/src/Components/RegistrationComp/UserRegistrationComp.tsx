import Grid from '@mui/material/Grid';
import Widgets from '../DashboardComp/DashboardWidgets';
import ContentContainer from '../DashboardComp/PaperStyleContainer';
import RegistrationInnerContext from './UserRegistrationInnerContext';



export default function RegisterUser() {


    return (
        <ContentContainer headings="Registration Page">
                <RegistrationInnerContext />           
        </ContentContainer>
    );
}