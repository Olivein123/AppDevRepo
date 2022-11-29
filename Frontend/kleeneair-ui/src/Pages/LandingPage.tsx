import { Button, Link } from "@mui/material";
import { Outlet } from "react-router-dom";

function LandingPage() {
    return (
        
        <div>
            <Outlet/>
            <p>Welcome to the homepage. </p>
            <Button variant="contained" href="/login">
                 Sign In               
            </Button>
        </div>
    ); 

}

export default LandingPage; 