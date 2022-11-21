import React, { Component } from "react";
import EmissionService from "./EmissionService";






/*
 class GetEmissionSites extends React.Component<any, any>{

 

}

export default GetEmissionSites; 
 class GetEmissionSites extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            sites:[]
        }
    }

    componentDidMount() {
        EmissionService.getAllSites().then((res) => {
            this.setState({ sites: res.data });
        });
    }

    render() {
        return (
            <div>
                <h2>
                    List of All Sites
                </h2>
                <div className='row'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Site name</th>
                                <th>Site address</th>
                                <th>Contact Number</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.sites.map(
                                    (                                    sites: { id: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.Key | null | undefined; sitename: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; contactnumber: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                                        <tr key={sites.id}>
                                            <td>{sites.id}</td>
                                            <td>{sites.sitename}</td>
                                            <td>{sites.contactnumber}</td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            ); 
    }

}
 */