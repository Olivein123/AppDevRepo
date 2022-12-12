import axios from 'axios'
import { useEffect, useState } from 'react';
import { Container, Paper, Box, Typography, TextField, MenuItem, Button, Alert } from "@mui/material";
import CardList from '../Components/DashboardComp/DashboardCardList';

export type EmissionSite = {
    siteid: number,
    sitename: string,
    siteaddress: string,
    contactnumber: number,
    customerlist:string,
    adminlist: string
}


export default function TextApp() {
    const [sites, setSite] = useState<EmissionSite[] | null>(); 

    useEffect(() => {
        const url = 'http://localhost:8080/site/getAllSites';
        axios.get(url).then((response) => {
            setSite(response.data)
            
        })
    }, []);
        

    return (
        <div>
            <p>Sites</p>
            <TextField sx={{ mt: 2, width: 250 }} id="filled-select-location" select label="Select" helperText="Select location of available testing centers">
                {sites ? // "?" -> if naay value ang sites then i-map niya ang sites
                    sites.map((site) => (
                        <MenuItem key={site.siteid} value={site.siteid}>
                            {site.sitename}
                        </MenuItem>
                        )): null}
            </TextField>
            < Alert severity="success" > Logout successful!</Alert >

            {sites ? sites.map((site) => (
                <CardList key={site.siteid} sitename={site.sitename} image="/Images/emission-center-img-1.jpg" address={site.siteaddress} alttext={site.sitename} />
                )) : null}


        </div>
        ); 
}


/*
 * 
                            <MenuItem key={site.siteid} value={site.siteid}>
                                <p>{site.sitename}</p>
                            </MenuItem>*/


/*
                    sites.map((site) => {

                        return <p>{site.siteid} {site.sitename}  {site.siteaddress} </p>
                    }): null}
*/



/*
 


{students.map((stud)=>{<CardItem></CardItem>}): null} //show or call values from api through mapping with syntax "return" ex {return <p>{stud.id}</p>} na i display with html


{students.map((stud)=>())} //display user created components ex. (<CardList)
 */ 