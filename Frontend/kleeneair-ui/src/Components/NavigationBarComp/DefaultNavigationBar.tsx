import { AppBar, Box, Button, Container, IconButton, Link, Menu, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from "react";


type defaultNavBarProps = {
    children: React.ReactNode; 
    }

const pages = ['Home', 'Services', 'Contact Us'];


export default function Navigationbar(props: defaultNavBarProps) {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <><AppBar position="static" sx={{ background: '#1B2845' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <img src="./Images/logo.png" style={{ height: 60, width: 60 }} />
                    <Typography
                        variant="h6" sx={{ mt: 2 }} noWrap component="div" align="left"
                    >
                        Kleene Air
                        <Typography variant="subtitle1" sx={{ mb: 2, mt: -1 }}>
                            Cleaner Air, Cleaner World
                        </Typography>
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "flex-end" } }}>
                        <Button href="/" sx={{ my: 2, color: 'white', display: 'block' }} > Home </Button>
                        <Button href="/" sx={{ my: 2, color: 'white', display: 'block' }} > Services </Button>
                        <Button href="/" sx={{ my: 2, color: 'white', display: 'block' }} > Contact Us </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>


        <><Container>
            {props.children}
        </Container>
            </></>
         
    );

}
