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



export const RestAPI = (): [(iuser: IUser) => void,(config: AxiosRequestConfig<any>) => void, boolean, string, IUser | undefined] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [target_user, setUser] = useState<IUser>(); 


    function sendRequest(config: AxiosRequestConfig<any>) {
        setLoading(true);

        axios(config)
            .then((response) => {
                setError('');
                console.log(response);
                setUser(response.data);
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

    return [newUser, sendRequest,  loading, error, target_user]

}
