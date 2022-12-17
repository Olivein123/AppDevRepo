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
    bookings: Schedule[], 
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
    bookings: Schedule[], 
    sites: ISites[],
}

export interface Schedule {
    bookingid: number, 
    centername: ISites[],
    dateAndTime: number 
}



export const RestAPI = (): [(iuser: IUser) => void, (config: AxiosRequestConfig<any>) => void, (isites: ISites) => void, boolean, string, IUser | undefined, ISites | undefined, ISites | undefined] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [target_user, setUser] = useState<IUser>(); 
    const [sites, setSites] = useState<ISites>();
    const [booking, setBooking] = useState<ISites>(); 


    function sendRequest(config: AxiosRequestConfig<any>) {
        setLoading(true);

        axios(config)
            .then((response) => {
                setError('');
                console.log(response);
                setUser(response.data);
                setBooking(response.data);
                setSites(response.data); 
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
    }

    
    //POST - USER
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

    //POST - USER
    function newSite(isites:ISites) {
        setLoading(true);
        const body = JSON.stringify(isites);
        const origin = window.location.origin;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Origin': origin,
            }
        }

        axios
            .post("http://localhost:8080/site/postEmissionSite", body, config)
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



    return [newUser, sendRequest,newSite, loading, error, target_user, sites, booking]

}
