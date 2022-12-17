import { Alert, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ContentContainer from "../Components/DashboardComp/PaperStyleContainer";
import AdminNavigationBar from "../Components/NavigationBarComp/AdminNavBar";

import { RestAPI } from "../Services/restAPI";

export default function AdminDashboard() {
    const [newUser, sendRequest, newSite, newBookingSchedule, addSiteToUser, addBookingToSite, loading, error, target_user, sites, booking] = RestAPI();

    useEffect(() => {
        sendRequest(
            {
                method: 'GET',
                url: "http://localhost:8080/customer/getAll"
            }
        )
    },[target_user] )

    return (
        <AdminNavigationBar>
            <ContentContainer headings="Admin Customer Dashboard">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">First Name</TableCell>
                                <TableCell align="right">Middle Name</TableCell>
                                <TableCell align="right">Last Name</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">Contact Number</TableCell>
                                <TableCell align="right">License Number</TableCell>
                                <TableCell align="right">Username</TableCell>
                                <TableCell align="right">Password</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(target_user) ? target_user.map((user) => (
                                <TableRow
                                    key={user.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user.id}
                                    </TableCell>
                                    <TableCell align="right">{user.firstname}</TableCell>
                                    <TableCell align="right">{user.middlename}</TableCell>
                                    <TableCell align="right">{user.lastname}</TableCell>
                                    <TableCell align="right">{user.address}</TableCell>
                                    <TableCell align="right">{user.contact_num}</TableCell>
                                    <TableCell align="right">{user.license_num}</TableCell>
                                    <TableCell align="right">{user.username}</TableCell>
                                    <TableCell align="right">{user.password}</TableCell>
                                </TableRow>
                            )):null}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ContentContainer>
        </AdminNavigationBar>
        );
    
}