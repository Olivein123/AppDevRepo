import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

export interface IVehicles {
    model: string,
    id: number,
    platenum: string,
    vehicletypeid: number
}

export interface ISites {
    siteid: number,
    sitename: string,
    siteaddress: string,
    contactnumber: number,
    customerlist:IUser[], 
    adminlist: IAdmin[]
}

export interface IAdmin {

}

export interface IUser {
    id: number, 
    firstname: string, 
    middlename: string,
    lastname: string, 
    address: string, 
    contact_num: number, 
    license_num: string, 
    username: string, 
    password: string,
    vehicles: IVehicles[],
    sites: ISites[],
}



export const RestAPI = (): [(iuser: IUser) => void, (config: AxiosRequestConfig<any>) => void, boolean, string] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [target_user, setUser] = useState<IUser>(); 


    function sendRequest(config: AxiosRequestConfig<any>) {
        setLoading(true);

        axios(config)
            .then((response) => {
                setError('');
                console.log(response);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
    }

    
    //POST
    function newUser(iuser: IUser) {
        setLoading(true);
        const body = JSON.stringify(iuser); 
        const origin = window.location.origin; 
        const config = {
            headers: {
                'Content-Type': 'application/json', 
                'Origin': origin,
                }
            }

        axios
            .post("http://localhost:8080/customer/postCustomer", body, config)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return [newUser,sendRequest,  loading, error]

}

/*
 * 
 * 
 *                 const params = new URLSearchParams();

        params.append('id', iuser.id.toString());
        params.append('firstname', iuser.firstname);
        params.append('middlename', iuser.middlename);
        params.append('lastname', iuser.lastname);
        params.append('address', iuser.address);
        params.append('contact_num', iuser.contact_num.toString());
        params.append('license_num', iuser.license_num);
        params.append('username', iuser.username);
        params.append('password', iuser.password);

        iuser.vehicles.forEach((vehicle: IVehicles) => {
            params.append('vehicles', JSON.stringify(vehicle));
        });

        iuser.sites.forEach((site: ISites) => {
            params.append('sites', JSON.stringify(site));
        });




 *             firstname: iuser.firstname,
            middlename: iuser.middlename, 
            lastname: iuser.lastname, 
            address: iuser.address,
            contact_num: iuser.contact_num.toString(), 
            license_num: iuser.license_num,
            username: iuser.username, 
            password: iuser.password,

 */ 