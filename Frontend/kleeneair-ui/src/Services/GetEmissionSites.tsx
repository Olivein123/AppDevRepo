import React, { Component, useState } from "react";
import EmissionService from "./EmissionService";


 class GetEmissionSites extends Component <any, any>{

    constructor(props:string) {
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
                                    (                                    site: { id: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.Key | null | undefined; sitename: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; contactnumber: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                                <tr>
                                    <td>{site.id}</td>
                                    <td>{site.sitename}</td>
                                    <td>{site.contactnumber}</td>
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

export default GetEmissionSites; 