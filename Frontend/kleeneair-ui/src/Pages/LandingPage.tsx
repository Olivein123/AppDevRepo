import { AppBar, Box, Button, Container, IconButton, Link, Menu, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Navigationbar from "../Components/Navigationbar";
import LandingSplash from "../Components/LandingSplash";


function LandingPage() {
    return (
        <><Navigationbar/><LandingSplash /></>
       
       
    );

}

export default LandingPage; 