import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert } from '@mui/material';



function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright � '}
            <Link color="inherit" href="https://mui.com/">
                Peak Iron 1
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const theme = createTheme();
const textTheme = {
    multilineColor: {
        color:'white'
        }
    }

function renderAlert(code: number) {
    switch (code) {
        case 0:
            return <Alert severity="info" sx={{mt: 2} }>Never give out your username & password to strangers.</Alert>
        case 1:
            return <Alert severity="error" sx={{ mt: 2 }} >Invalid username or password</Alert >;
        case 2:
            return <Alert severity="success" sx={{ mt: 2 }}>Login successfully!</Alert>; 
    }

}




export default function LoginMenu() {
    const [usern, setUsername] = useState(""); 
    const [passw, setPassword] = useState(""); 
    const [status, setStatus] = useState<boolean>(); 
    const [code, setCode] = useState(0); 

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.get('http://localhost:8080/customer/getAll', {
            params: {
                username: usern,
                password: passw
            }
        })
            .then(response => {
                if (response.status === 200) {
                    const user = response.data.find(
                        (u:any) => u.username === usern && u.password === passw);
                    if (user) { 
                        console.log(usern, passw);
                        console.log("Login successful!");
                        localStorage.setItem('user', user);  //stores const user to localstorage
                        setCode(2); 
                        setStatus(true);

                        if (usern !== "admin") {
                            window.location.assign('http://localhost:3000/user-dashboard');
                        } else {
                            window.location.assign('http://localhost:3000/admin-dashboard');
                        }
                        
                    } else {
                        console.log('invalid username or password'); 
                        setCode(1); 
                        setStatus(false); 
                    }
                    
                } else {
                    console.log("error");
                }
            })
            .catch(error => {
                console.log(error);
                console.log(status);
                setStatus(false)
            });  
    };


    useEffect(() => {

    }, [code]);


    return (



        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh', color: 'white'}} >
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url("/Images/splashscreen1.png")',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ background: 'white' } }>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            mt: 30, 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: 'white'
                            
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="usern"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                                
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="passw"
                                autoComplete="current-password"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/" variant="body2" sx={{ml:-1}} >
                                        {"Return to the home page?"}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>

                            <Copyright sx={{ mt: 5 }} />


                            
                            
                        </Box>


                        {renderAlert(code)} 
                       
                            
                        
                        

                        
                    </Box>

                </Grid>
                </Grid>
        </ThemeProvider>
    );
}