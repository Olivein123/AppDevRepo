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
    dateAndTime: string
}

export interface SiteToUser {
    customerid: number, 
    siteid: number
}

export interface ScheduleToSite {
    customerid: number,
    bookingid: number
}

export interface CancelBooking {
    customerid: number,
    bookingid: number
}



export const RestAPI = (): [(iuser: IUser) => void, (config: AxiosRequestConfig<any>) => void, (isites: ISites) => void, (schedule: Schedule) => void, (sitetouser: SiteToUser) => void, (scheduletosite: ScheduleToSite) => void, (cancelbooking: CancelBooking)=>void , boolean, string, IUser | undefined, ISites | undefined, Schedule | undefined] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [target_user, setUser] = useState<IUser>(); 
    const [sites, setSites] = useState<ISites>();
    const [booking, setBooking] = useState<Schedule>(); 


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

    //POST - NEW SITE
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

    //POST - NEW AVAILABLE SCHEDULE

    function newBookingSchedule(schedule: Schedule) {
        setLoading(true); 
        const body = JSON.stringify(schedule);
        const origin = window.location.origin;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Origin': origin,
            }
        }

        axios
            .post("http://localhost:8080/booking/addBooking", body, config)
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

    function addSiteToUser(sitetouser: SiteToUser) {
        setLoading(true);
        axios.put("http://localhost:8080/customer/updateSites", {}, {
            params: {
                customerId: sitetouser.customerid, 
                siteId: sitetouser.siteid
                }
            })
            .then((response) => {
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false); 
            });
    }

    function addBookingToSite(scheduletosite: ScheduleToSite) {
        setLoading(true);
        axios.put("http://localhost:8080/customer/updateBooking", {}, {
            params: {
                customerId: scheduletosite.customerid,
                bookingId: scheduletosite.bookingid
            }
        })
            .then((response) => {
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    //DELETE

    function cancelBookingToSite(cancelbooking: CancelBooking) {
        setLoading(true);
        axios.delete(`http://localhost:8080/customer/cancelBookingsToSite/${cancelbooking.customerid},${cancelbooking.bookingid}`)
            .then((response) => {
                // handle success
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }


    return [newUser, sendRequest,newSite, newBookingSchedule, addSiteToUser, addBookingToSite, cancelBookingToSite, loading, error, target_user, sites, booking]

}
