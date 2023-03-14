import { Alert, Button, CircularProgress, Divider, FormControl, Grid, TextField } from "@mui/material";
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { RestAPI } from "../../Services/restAPI";
import axios from "axios";
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
    const [userClicked, setUserClicked] = useState(false);
    const [fnameClicked, setFnameClicked] = useState(false);
    const [mnameClicked, setMnameClicked] = useState(false);
    const [lnameClicked, setLnameClicked] = useState(false);
    const [addressClicked, setAddressClicked] = useState(false);
    const [contactClicked, setContactClicked] = useState(false);
    const [licenseClicked, setLicenseClicked] = useState(false);
    const [passClicked, setPassClicked] = useState(false);
    const [modelClicked, setModelClicked] = useState(false);
    const [plateNumberClicked, setPlateNumberClicked] = useState(false);
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
        setOpen(true)
        setUserClicked(true)
        setFnameClicked(true)
        setMnameClicked(true)
        setLnameClicked(true)
        setAddressClicked(true)
        setContactClicked(true)
        setLicenseClicked(true)
        setPassClicked(true)
        setModelClicked(true)
        setPlateNumberClicked(true)
        setSubmitted(true);
        if (fname !== "" && mname !== "" && lname !== "" && address !== "" && contact !== undefined && 
        license !== "" && user !== "" && pass !== "" && model !== "" && model !== "" && platenumber !== "") {
            newUser({
                id: -1,
                firstname: fname, middlename: mname, lastname: lname, address: address,
                contact_num: contact, license_num: license, username: user, password: pass,
                vehicles: [], bookings: [], sites: []
            })
            setSuccess(true);
            setCode(2);
            console.log(fname, mname, lname, address, contact, license, user, pass); 
        } else {
            console.log("error");
            setCode(1);
            return <><div><Alert severity="error" >Fields are required!</Alert ></div></>
        }
    }

    if (loading) return <CircularProgress/>

    if (error !== "") {
        return <div>
                    <Alert severity="error" >Error detected on code, check console!</Alert >
                    <Button sx={{m:2, display: 'flex'}} href="/register">Back</Button>
                </div>
    } else {
        if (success !== false) {
            return <div>
                <Alert severity="success">Account is created!</Alert> 
                <Button sx={{m:2, display:'flex'}} href="/login">Login</Button>
            </div>
        }
    }

    interface TextfieldProps{
        state: string,
        id:string,
        label:string,
        key:string,
        value:string,
        stateSetter:(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    }

    const TextFieldFunction = (props:TextfieldProps) =>{
        return(
             <TextField error = {props.state === "" && submitted} id={props.id} label={props.label}
                type="text" variant="outlined" value={props.value} key={props.key}
                onChange={props.stateSetter} />
        )
    }

    return (
        <FormControl className="centerDisplayForm">
            <div>

            <div className="registerInLine">
                    <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                        <TextField error = {user === "" && submitted} id="username" label="Username" 
                        type="text" variant="outlined" value={user} key="user" 
                        onClick={()=> setUserClicked(true)}
                        onChange={(event) => setUsername(event.target.value)} />
                    </FormControl>

                    <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                        <TextField error = {pass === "" && submitted} required id="password" label="Password" 
                        type="Password" variant="outlined" value={pass} key="pass" 
                        onClick={()=>setPassClicked(true)}
                        onChange={(event) => setPassword(event.target.value)} />
                    </FormControl>
            </div>
            
            <div className="registerInLine">
                <FormControl sx={{ ml:3, mb: 3}} variant="outlined">
                    <TextField  error = {fname === "" && submitted} id="firstname" label="First Name" 
                    onClick={()=>setFnameClicked(true)}
                    type="text" value={fname} variant="outlined" key="ftname" 
                    onChange={(event) => setFirstname(event.target.value)} />
                </FormControl>

                <FormControl sx={{ ml: 3, mb: 3}} variant="outlined">
                    <TextField error = {mname === "" && submitted} id="middlename" label="Middle Name" 
                    onClick={()=>setMnameClicked(true)}
                    type="text" value={mname} variant="outlined" key="mname"  
                    onChange={(event) => setMiddlename(event.target.value)} />
                </FormControl>

                <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                    <TextField error = {lname === "" && submitted} id="lastname" label="Last Name" 
                    onClick={()=>setLnameClicked(true)}
                    type="text" value={lname} variant="outlined" key="lname" 
                    onChange={(event) => setLastname(event.target.value)} />
                </FormControl>
            </div>

            <div className="registerInLine">
                <FormControl sx={{ ml: 3, mb: 3}} variant="outlined">
                    <TextField error={address === "" && submitted} id="address" label="Address"
                    onClick={()=>setAddressClicked(true)} 
                    type="text" value={address} variant="outlined" key="address" 
                    onChange={(event) => setAddress(event.target.value)} />
                </FormControl>
            </div>
            

            <div className="registerInLine">
                <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                    <TextField error ={contact === 63 && submitted} id="contactnumber" label="Contact Number" 
                    onClick={()=>setContactClicked(true)}
                    type="tel" value={contact} variant="outlined" key="contact" 
                    onChange={verifyNumber} />
                </FormControl>

                <FormControl sx={{ ml: 3, mb: 3}} variant="outlined">
                    <TextField error ={license == "" && submitted} id="licensenumber" label="License Number" 
                    onClick={()=>setLicenseClicked(true)}
                    type="tel" value={license} variant="outlined" key="license" 
                    onChange={(event) => setLicenseNumber(event.target.value)} />
                </FormControl>
            </div>

                <Divider sx={{ mt: 2, mb:2 }}>Vehicle Details</Divider>
            <div className="registerInLine">
               <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                  <TextField error={model == "" && submitted} id="model" label="Vehicle Model" 
                  onClick={()=>setModelClicked(true)}
                  type="tel" value={model} variant="outlined" key="model" 
                  onChange={(event) => setModel(event.target.value)} />
               </FormControl>

               <FormControl sx={{ ml: 3, mb: 3 }} variant="outlined">
                  <TextField error={platenumber == "" && submitted} id="platenumber" label="Plate Number" 
                  onClick={()=>setPlateNumberClicked(true)}
                  type="tel" value={platenumber} variant="outlined" key="platenumber" 
                  onChange={(event) => setPlateNumber(event.target.value)} />
               </FormControl>
            </div>


            <Grid container>
                <Grid item>
                        <Button sx={{ ml: 3, mb: 3, marginRight: 0 }} variant="contained" onClick={SubmitRegistration}>Sign Up</Button>
                </Grid>
                <Grid item sx={{ ml: 3, mt: -1,   fontSize: "15px" }}>
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