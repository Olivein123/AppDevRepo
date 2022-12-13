import axios from 'axios'
import { useEffect, useState } from 'react';
import { Container, Paper, Box, Typography, TextField, MenuItem, Button, Alert } from "@mui/material";
import CardList from '../Components/DashboardComp/DashboardCardList';


export type Customer = {
    id: number,
    firstname: string,
    middlename: string,
    lastname: string,
    address: string,
    contact_num: string,
    license_num: string,
    username: string,
    password: string,
}
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
    const [users, setUserDetails] = useState<Customer[] | null>();  

    useEffect(() => {
        const url = 'http://localhost:8080/customer/getAll'
        axios.get(url).then((response) => {
            setUserDetails(response.data)
        })
    }, [users]);
        

    return (
        <div>
            <p>Customers</p>
            <table>
                <thead>
                    <tr>
                        <th >ID</th>
                        <th>First name</th>
                        <th>Middle name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Contact number</th>
                        <th>License Number</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>

                {users ?
                    users.map((user) => {
                        return <tbody>
                            <tr>
                                <td key="id">{user.id}</td>
                                <td key="fname">{user.firstname}</td>
                                <td key="mname">{user.middlename}</td>
                                <td key="lname">{user.lastname}</td>
                                <td key="address">{user.address}</td>
                                <td key="contact">{user.contact_num}</td>
                                <td key="license">{user.license_num}</td>
                                <td key="usern">{user.username}</td>
                                <td key="pass">{user.password}</td>
                            </tr>
                        </tbody>

                    }) : null
                }</table>


            
        </div>
        ); 
}


/*
 *             <p>Sites</p>
            <TextField sx={{ mt: 2, width: 250 }} id="filled-select-location" select label="Select" helperText="Select location of available testing centers">
                {sites ? // "?" -> if naay value ang sites then i-map niya ang sites
                    sites.map((site) => (
                        <MenuItem key={site.siteid} value={site.siteid}>
                            {site.sitename}
                        </MenuItem>
                    )) : null}
            </TextField>

            {sites ? sites.map((site) => (
                <CardList key={site.siteid} sitename={site.sitename} image="/Images/emission-center-img-1.jpg" address={site.siteaddress} alttext={site.sitename} />
            )) : null}


 *             <p>Customers</p>
            <table>
                <thead>
                    <tr>
                        <th >ID</th>
                        <th>First name</th>
                        <th>Middle name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Contact number</th>
                        <th>License Number</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                
            {users ? 
                users.map((user) => {
                    return <tbody>
                        <tr>
                            <td key="id">{user.id}</td>
                            <td key="fname">{user.firstname}</td>
                            <td key="mname">{user.middlename}</td>
                            <td key="lname">{user.lastname}</td>
                            <td key="address">{user.address}</td>
                            <td key="contact">{user.contact_num}</td>
                            <td key="license">{user.license_num}</td>
                            <td key="usern">{user.username}</td>
                            <td key="pass">{user.password}</td>
                            </tr>
                        </tbody>
                    
                }): null
                }</table>
 * 
    useEffect(() => {
        const url = 'http://localhost:8080/site/getAllSites';
        axios.get(url).then((response) => {
            setSite(response.data)
            
        })
    }, []);


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