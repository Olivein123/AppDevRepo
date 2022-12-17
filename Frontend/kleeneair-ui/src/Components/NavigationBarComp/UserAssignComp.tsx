import { Container, Paper, Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import React, { useEffect } from "react";
import { RestAPI } from "../../Services/restAPI";

/*
const sites = [
    { name: 'X Center', location: 'Cebu City', },
    { name: 'Y Center', location: 'Cebu City', },
    { name: 'XY Center', location: 'Cebu City', },
    { name: 'XYZ Center', location: 'Lapu-lapu', },
];*/



export default function UserAssigns() {
    const [newUser, sendRequest, newSite, loading, error, target_user, sites, booking] = RestAPI();

    useEffect(() => {
        {
            sendRequest({
                method: "GET",
                url: "http://localhost:8080/site/getAllSites"
            })

        }
    }, [sites]);

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

        alert("NICE!"); 
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
                        {Array.isArray(sites)?sites.map((option) => (

                            <MenuItem key={option.sitename} value={option.sitename}>
                                {option.sitename}
                            </MenuItem>
                        )):null}
                    </TextField>
                    <br />
                    <TextField sx={{ mt: 2, width: 250 }} id="filled-select-location" select label="Select" value={siteloc} onChange={setLoc} helperText="Select location of available testing centers">
                        {Array.isArray(sites)?sites.map((option) => (

                            <MenuItem key={option.siteaddress} value={option.siteaddress}>
                                {option.siteaddress}
                            </MenuItem>
                        )):null}
                    </TextField>


                </Box>
                <Button sx={{ width: 150, background: '#2656FF' }} variant="contained" onClick={submitLocation}>Submit</Button>
            </Paper>

        </Container>

    );
}