import { Alert, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import ContentContainer from "../Components/DashboardComp/PaperStyleContainer";
import AdminNavigationBar from "../Components/NavigationBarComp/AdminNavBar";
import { RestAPI } from "../Services/restAPI";

function renderAlert(code: number) {
    switch (code) {
        case 0:
            return <Alert severity="info" sx={{ mt: 2 }}>Did you know, the ozone layer keeps the earth from being warm?</Alert>
        case 1:
            return <Alert severity="error" sx={{ mt: 2 }} >Invalid customer/schedule</Alert >;
        case 2:
            return <Alert severity="success" sx={{ mt: 2 }}>Schedule is booked successfully!</Alert>;


    }

}




export default function CreateSite() {
    const [newUser, sendRequest, newSite, loading, error, target_user,sites,  booking] = RestAPI(); 
    const [sitename, setSiteName] = useState(""); 
    const [siteaddress, setSiteAddress] = useState(""); 
    const [contact, setContactNumber] = useState(63); 
    const [success, setSuccess] = useState(false); 
    const [code, setCode] = useState(0); 


    const submitClick = () => {
        newSite({
            siteid: -1,
            sitename: sitename,
            siteaddress: siteaddress,
            contactnumber: contact,
            bookings: [],
            customerlist: [],
            adminlist: []
        }); 
        setSuccess(true); 
        console.log("sitename: ",sitename, "siteaddress:", siteaddress, "contact:", contact); 
    }


    const verifyNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        //regex for strict number inputs
        if (/^\d+$/.test(value)) {
            setContactNumber(parseInt(value));
        }
    }


    return (
        <AdminNavigationBar>
            <ContentContainer headings="Create a Smoke Emission Testing Site">
                <Box component="form" sx={{ m: 2 }} autoComplete="off">
                    <TextField
                        required
                        id="sitename"
                        label="Testing Center Name"
                        defaultValue={sitename}
                        variant="filled"
                        onChange={(event) => { setSiteName(event.target.value) }}
                    />
                    <br/>
                    <TextField
                        required
                        id="siteaddress"
                        label="Address"
                        defaultValue={siteaddress}
                        variant="filled"
                        sx={{ mt: 2 }}
                        onChange={(event) => { setSiteAddress(event.target.value) }}
                    />
                    <br/>
                    <TextField
                        required
                        id="contact"
                        label="Contact Number"
                        value={contact}
                        variant="filled"
                        sx={{ mt: 2 }}
                        onChange={verifyNumber}
                    />                    
                </Box>
                <Button sx={{ width: 150, background: '#2656FF' }} variant="contained" onClick={submitClick}>Create</Button>

                {success ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
                    <Alert severity="success">Site is created!!</Alert></Box>
                ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
                    <Alert severity="warning">Error!</Alert></Box>
                )}

            </ContentContainer>
        </AdminNavigationBar>
        
        );
}