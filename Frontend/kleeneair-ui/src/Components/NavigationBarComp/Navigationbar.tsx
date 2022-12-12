import { AppBar, Box, Button, Container, IconButton, Link, Menu, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const pages = ['Services', 'Contact Us'];


export default function Navigationbar() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ background: '#1B2845' }}>
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
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "flex-end" } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>

                        ))}
                    </Box>

                    <Button variant="outlined" href="/login" sx={{ ml: 1.5, color: 'white', border: "1px solid white" }}>Log in</Button>
                    <Button variant="contained" href="/register" sx={{ ml: 1.5, bgcolor: 'darkblue' }}>Register</Button>

                   

                </Toolbar>
            </Container>
        </AppBar>
    );

}
