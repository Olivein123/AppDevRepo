import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";




interface State {
    password: string;
    showPassword: boolean;
}


export default function RegistrationInnerContext() {
    const [values, setValues] = useState({ password: '', showPassword: false });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <FormControl className="centerForm">
            <FormControl sx={{ ml:3, mb: 3,  width: '40ch' }} variant="outlined">
                <TextField id="username" label="Username" type="text" variant="outlined" />
            </FormControl>
            <FormControl sx={{ ml: 3, mb: 3, width: '40ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>} label="Password" />
            </FormControl>
            <FormControl sx={{ ml: 3, mb: 3, width: '40ch' }} variant="outlined">
                <TextField id="emailaddress" label="Email Address" type="email" variant="outlined" />
            </FormControl>
            <FormControl sx={{ ml: 3, mb: 3, width: '40ch' }} variant="outlined">
                <TextField id="contactnumber" label="Contact Number" type="tel" variant="outlined" />
            </FormControl>
            <FormControl sx={{ ml: 3, mb: 3, width: '40ch' }} variant="outlined">
                <TextField id="address" label="Address" type="text" variant="outlined" />
            </FormControl>
            <Grid container>
                <Grid item>
                    <Button sx={{ ml: 3, mb: 3, marginRight: 0 }} variant="contained" href="/login">Sign Up</Button>
                </Grid>
                <Grid item sx={{ ml: 3, mt: -1,   fontSize: "15px" }}>
                    <p>Already have an account? <a href="/login">Log in</a></p>
                </Grid>
            </Grid>
        </FormControl>
        
        
        ); 
}