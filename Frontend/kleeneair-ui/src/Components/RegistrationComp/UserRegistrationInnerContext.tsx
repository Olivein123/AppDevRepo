import { Alert, Button, CircularProgress, Divider, FormControl, Grid, TextField } from "@mui/material";
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { RestAPI } from "../../Services/restAPI";
import CSS from 'csstype';
import SnackbarComp from "../Snackbar/SnackbarComp";

export default function RegistrationInnerContext() {
    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, 
        cancelBookingToSite, loading, error, target_user, sites, booking] = RestAPI(); 

    const [success, setSuccess] = useState(false); 
    const [fname, setFirstname] = useState(""); 
    const [mname, setMiddlename] = useState(""); 
    const [lname, setLastname] = useState(""); 
    const [address, setAddress] = useState(""); 
    const [contact, setContactNumber] = useState(63); 
    const [license, setLicenseNumber] = useState("");
    const [user, setUsername] = useState(""); 
    const [pass, setPassword] = useState(""); 
    const [model, setModel] = useState(""); 
    const [platenumber, setPlateNumber] = useState("");
    const [code, setCode] = useState(0); 
    const [open, setOpen] = useState(false);
    const [submitted,setSubmitted] = useState(false);

    //Contact Number number verify
    const verifyNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value; 

        //regex for strict number inputs
        if (/^\d+$/.test(value)) {
            setContactNumber(parseInt(value));
        }
    }

    //onClick for registration submission
    const SubmitRegistration = () => {
        setOpen(true);
        setSubmitted(true);
        if (fname !== "" && mname !== "" && lname !== "" && address !== "" && contact !== undefined && 
        license !== "" && user !== "" && pass !== "" && model !== "" && model !== "" && platenumber !== "") {
            newUser({
                id: -1, firstname: fname, middlename: mname, lastname: lname, address: address,
                contact_num: contact, license_num: license, username: user, password: pass,
                vehicles: [], bookings: [], sites: []
            })
            setSuccess(true);
            setCode(2);
            console.log(fname, mname, lname, address, contact, license, user, pass); 
        } else {
            console.log("error");
            setCode(1);
            return <div><Alert severity="error" >Fields are required!</Alert ></div>
        }
    }

    if (loading) return <CircularProgress/>

    if (error !== "") {
        return(
            <div>
                <Alert severity="error" >Error detected on code, check console!</Alert >
                <Button sx={{m:2, display: 'flex'}} href="/register">Back</Button>
            </div>
        ); 
    } else {
        if (success !== false) {
            return (
                <div>
                    <Alert severity="success">Account is created!</Alert> 
                    <Button sx={{m:2, display:'flex'}} href="/login">Login</Button>
                </div>
            );
        }
    }

    const textFieldStyling:CSS.Properties ={ width:"100%", fontSize:"4px" }

    const divFlexStyling:CSS.Properties = { display: "flex", margin:"5px" }

    const divContainerStyling:CSS.Properties = { margin:'10px', paddingLeft:"20px" }

    return (
        <div style={divContainerStyling}>
    
        <div style={divFlexStyling}>
        
            {/*Username Text Field*/}
            <TextField error = {user === "" && submitted} id="username" label="Username" 
            type="text" variant="outlined" value={user} 
            key="user" size="small"
            InputProps={{ style: {fontSize:12} }} style={textFieldStyling} 
            sx={{
                marginRight:'10px',
                marginTop:'10px'
            }}
            onChange={(event) => setUsername(event.target.value)} />

            {/*Password Text Field*/}
            <TextField error = {pass === "" && submitted} required id="password" label="Password" 
            type="Password" variant="outlined" value={pass} 
            key="pass" size="small"
            InputProps={{ style: {fontSize:12} }} style={textFieldStyling}
            sx={{
                marginLeft:'10px',
                marginTop:'10px'
            }}
            onChange={(event) => setPassword(event.target.value)} />

        </div>
       
        <div style={divFlexStyling}>

            {/*First Name Text Field*/}
            <TextField  error = {fname === "" && submitted} 
            id="firstname" label="First Name" 
            style={textFieldStyling} 
            InputProps={{ style: {fontSize:12} }}
            type="text" value={fname} variant="outlined" 
            key="ftname" size="small"
            sx={{
                marginRight:'10px',
                marginTop:"10px"
            }}
            onChange={(event) => setFirstname(event.target.value)} />

            {/*Middle Name Text Field*/}
            <TextField error = {mname === "" && submitted} id="middlename" label="Middle Name" 
            style={textFieldStyling} 
            InputProps={{ style: {fontSize:12} }}
            type="text" value={mname} variant="outlined" 
            key="mname" size="small"
            sx={{
                marginTop:"10px"
            }}
            onChange={(event) => setMiddlename(event.target.value)} />

            {/*Last Name Text Field*/}
            <TextField error = {lname === "" && submitted} id="lastname" label="Last Name" 
            style={textFieldStyling}
            InputProps={{ style: {fontSize:12} }}
            type="text" value={lname} variant="outlined" 
            key="lname" size="small" 
            sx={{
                marginLeft:'10px',
                marginTop:"10px"
            }}
            onChange={(event) => setLastname(event.target.value)} />

        </div>
        
        <div style={divFlexStyling}>
            
            {/*Address Text Field*/}
            <TextField error={address === "" && submitted} id="address" label="Address"
            style={textFieldStyling}
            InputProps={{ style: {fontSize:12} }}
            type="text" value={address} variant="outlined" 
            key="address" size="small"
            sx={{ 
                marginTop:"10px"
            }}
            onChange={(event) => setAddress(event.target.value)} />

        </div>
            

        <div style={divFlexStyling}>
            
            {/*Contact Number Text Field*/}
            <TextField error ={contact === 63 && submitted} id="contactnumber" label="Contact Number" 
            style={textFieldStyling}
            InputProps={{ style: {fontSize:12} }}
            type="tel" value={contact} variant="outlined" 
            key="contact" size="small"
            sx={{
                marginRight:'10px',
                marginTop:'10px'
            }}
            onChange={verifyNumber} />

            {/*License Number Text Field*/}
            <TextField error ={license == "" && submitted} id="licensenumber" label="License Number" 
            style={textFieldStyling}
            InputProps={{ style: {fontSize:12} }}
            type="tel" value={license} variant="outlined" 
            key="license" size="small"
            sx={{
                marginLeft:'10px',
                marginTop:'10px'
            }}
            onChange={(event) => setLicenseNumber(event.target.value)} />

        </div>

        <Divider sx={{ mt: 2, mb:2, fontSize:"10px" }}>Vehicle Details</Divider>
            
        <div style={divFlexStyling}>
            
            {/*Vehicle Model Text Field*/}
            <TextField error={model == "" && submitted} id="model" label="Vehicle Model" 
            style={textFieldStyling}
            InputProps={{ style: {fontSize:12} }}
            type="tel" value={model} variant="outlined" 
            key="model" size="small"
            sx={{
                marginRight:"10px",
                marginBottom:"25px"
            }}
            onChange={(event) => setModel(event.target.value)} />

            {/*Plate Number Text Field*/}
            <TextField error={platenumber == "" && submitted} id="platenumber" label="Plate Number" 
            style={textFieldStyling}
            InputProps={{ style: {fontSize:12} }}
            type="tel" value={platenumber} variant="outlined" 
            key="platenumber" size="small"
            sx={{
                marginLeft:"10px",
                marginBottom:"25px"
            }}
            onChange={(event) => setPlateNumber(event.target.value)} />

        </div>

            <Grid container>
                <Grid item>
                    <Button sx={{ ml: 3, mb: 3, marginRight: 0, transform:"scale(0.8)"}} 
                    variant="contained" 
                    onClick={SubmitRegistration}>Sign Up</Button>
                </Grid>
                
                <Grid item sx={{ ml: 2, mt: 0,   fontSize: "12px"}}>
                    <p>Already have an account? <a href="/login">Log in</a></p>
                </Grid>

                <SnackbarComp 
                setOpen={setOpen}
                open={open}
                code={code} 
                successMessage={'Register success!'} 
                errorMessage={'Register failed!'}/>
            </Grid>

        </div>
    ); 
}



/*
 * 
 *         newUser({
            firstname: fname,
            middlename: mname,
            lastname: lname,
            address: address,
            contact_num: contact,
            license_num: license,
            username: user,
            password: pass,
            id: 0
        });
 * 
 *                             newUser({                                
                                firstname: "Jonyy",
                                middlename: "Hey",
                                lastname: "Doe",
                                address: "Lapu lapu",
                                contact_num: "contact",
                                license_num: "license",
                                username: "benbee",
                                password: "12313", 
                                id: -1


 *     const [values, setValues] = useState({ password: '', showPassword: false });

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




             <FormControl sx={{ ml: 3, mb: 3, width: '65.5ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>} label="Password" />
            </FormControl> 


=================
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />



        newUser({
            id: -1,
            firstname: fname,
            middlename: mname,
            lastname: lname,
            address: address,
            contact_num: contact,
            license_num: license,
            username: user,
            password: pass,
            vehicles: [
                {
                    model: model, 
                    id: -1,
                    platenum: platenumber,
                    vehicletypeid: -1 
                }
            ],
            bookings: [

            ], 
            sites: [
                {
                    siteid: -1, 
                    sitename: "", 
                    siteaddress: "", 
                    contactnumber: -1, 
                    bookings: [],
                    customerlist: [], 
                    adminlist:[]
                }
            ]
        })
 */