import { Alert, Button, CircularProgress, Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { RestAPI } from "../../Services/restAPI";
import axios from "axios";




interface State {
    password: string;
    showPassword: boolean;
}


export default function RegistrationInnerContext() {
    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, loading, error, target_user, sites, booking] = RestAPI(); 

    const [sucess, setSuccess] = useState(false); 
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
            vehicles: [],
            bookings: [], 
            sites: []
        })
        setSuccess(true); 
        console.log(fname, mname, lname, address, contact, license, user, pass); 
    }

    if (loading) return <CircularProgress />



    if (error !== "") {
        return <><div>
                    <Alert severity="error" >Error detected on code, check console!</Alert >
                    <Button sx={{m:2, display: 'flex'}} href="/register">Back</Button>
                </div></>
    } else {
        if (sucess !== false) {
            return <><div>
                <Alert severity="success">Account is created!</Alert> 
                <Button sx={{m:2, display:'flex'}} href="/login">Login</Button>
            </div></>
        }
    }

    return (
        <FormControl className="centerDisplayForm">
            <div>

            <div className="registerInLine">
                    <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                        <TextField id="username" label="Username" type="text" variant="outlined" value={user} key="user" onChange={(event) => setUsername(event.target.value)} />
                    </FormControl>

                    <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                        <TextField required id="password" label="Password" type="Password" variant="outlined" value={pass} key="pass" onChange={(event) => setPassword(event.target.value)} />
                    </FormControl>
            </div>
            
            <div className="registerInLine">
            <FormControl sx={{ ml:3, mb: 3}} variant="outlined">
                        <TextField id="firstname" label="First Name" type="text" value={fname} variant="outlined" key="ftname" onChange={(event) => setFirstname(event.target.value)} />
            </FormControl>
            <FormControl sx={{ ml: 3, mb: 3}} variant="outlined">
                        <TextField id="middlename" label="Middle Name" type="text" value={mname} variant="outlined" key="mname"  onChange={(event) => setMiddlename(event.target.value)} />
            </FormControl>
            <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                        <TextField id="lastname" label="Last Name" type="text" value={lname} variant="outlined" key="lname" onChange={(event) => setLastname(event.target.value)} />
            </FormControl>
            </div>

            <div className="registerInLine">
            <FormControl sx={{ ml: 3, mb: 3}} variant="outlined">
                        <TextField id="address" label="Address" type="text" value={address} variant="outlined" key="address" onChange={(event) => setAddress(event.target.value)} />
                    </FormControl>
                </div>
            

            <div className="registerInLine">
            <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                        <TextField id="contactnumber" label="Contact Number" type="tel" value={contact} variant="outlined" key="contact" onChange={verifyNumber} />
            </FormControl>
            <FormControl sx={{ ml: 3, mb: 3}} variant="outlined">
                        <TextField id="licensenumber" label="License Number" type="tel" value={license} variant="outlined" key="license" onChange={(event) => setLicenseNumber(event.target.value)} />
            </FormControl>

                </div>

                <Divider sx={{ mt: 2, mb:2 }}>Vehicle Details</Divider>
            <div className="registerInLine">
               <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                  <TextField id="model" label="Vehicle Model" type="tel" value={model} variant="outlined" key="model" onChange={(event) => setModel(event.target.value)} />
               </FormControl>
               <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                  <TextField id="platenumber" label="Plate Number" type="tel" value={platenumber} variant="outlined" key="platenumber" onChange={(event) => setPlateNumber(event.target.value)} />
               </FormControl>
            </div>


            <Grid container>
                <Grid item>
                        <Button sx={{ ml: 3, mb: 3, marginRight: 0 }} variant="contained" onClick={SubmitRegistration}>Sign Up</Button>
                </Grid>
                <Grid item sx={{ ml: 3, mt: -1,   fontSize: "15px" }}>
                    <p>Already have an account? <a href="/login">Log in</a></p>
                </Grid>
            </Grid>
            </div>
        </FormControl>
        
        
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