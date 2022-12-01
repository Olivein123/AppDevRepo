import { Container, Paper, Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import React from "react";

const sites = [
    { name: 'X Center', location: 'Cebu City', },
    { name: 'Y Center', location: 'Cebu City', },
    { name: 'XY Center', location: 'Cebu City', },
    { name: 'XYZ Center', location: 'Lapu-lapu', },
];



export default function UserAssigns() {


    const paperStyle = { padding: '250px 20px', margin: "40px", justifyContent: "space-evenly" }


    const [avsites, setAvailableSite] = React.useState('');
    const [siteloc, setSiteLocation] = React.useState('');

    const setSite = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAvailableSite(event.target.value);
    }

    const setLoc = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSiteLocation(event.target.value);
    }

    const submitLocation = (event: React.MouseEvent<HTMLButtonElement>) => {

        if (showNearby(siteloc) === 1) {
            alert("Unavailable!")
            setAvailableSite('');
            setSiteLocation('');
        } else {
            alert("Horay!");
            console.log("Testing Center: " + avsites + "\nLocation: " + siteloc);
        }


    }

    const showNearby = (site: string) => {
        if (site !== "Lapu-lapu") {
            return 1;
        } else {

            return 0;
        }
    }
    return (
        <Container maxWidth={false}>
            <Paper elevation={3} style={paperStyle}>
                <Typography variant="h4">Welcome User</Typography>
                <Box component="form" sx={{ m: 2 }} noValidate autoComplete="off" >
                    <TextField sx={{ width: 250, mt: 2 }} id="filled-select-site" select label="Select" value={avsites} onChange={setSite} helperText="Select available testing centers">
                        {sites.map((option) => (

                            <MenuItem key={option.name} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <br />
                    <TextField sx={{ mt: 2, width: 250 }} id="filled-select-location" select label="Select" value={siteloc} onChange={setLoc} helperText="Select location of available testing centers">
                        {sites.map((option) => (

                            <MenuItem key={option.location} value={option.location}>
                                {option.location}
                            </MenuItem>
                        ))}
                    </TextField>


                </Box>
                <Button sx={{ width: 150, background: '#2656FF' }} variant="contained" onClick={submitLocation}>Submit</Button>
            </Paper>

        </Container>

    );
}