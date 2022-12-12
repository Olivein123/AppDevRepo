import {Routes, Route} from 'react-router-dom'
import AboutusPage from './Pages/AboutUs';
import LandingPage from './Pages/LandingPage';
import LoginMenu from './Pages/Login';
import RegisterUser from './Pages/Register';
import UserAppointmentMenu from './Pages/UserAppointment';
import UserDashboard from './Pages/UserDashboard';
import UserSetSiteMenu from './Pages/UserSetSiteMenu';
import TestAxios from './Services/TestAxios';

export default function MainRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<LoginMenu />} />
                <Route path="/register" element={<RegisterUser/>}/>
                <Route path="/user-select-site" element={<UserSetSiteMenu />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/user-appointments" element={<UserAppointmentMenu />} />
                <Route path="/test" element={<TestAxios />} />
                <Route path="/about-us" element={<AboutusPage/>}/>
            </Routes>  
        </div>
        );
}


/* USE THIS FORMAT INIG DASHBOARD NA TO ACCESS THE PAGE WITHIN A PAGE, 
 *                <Route path="/" element={<LandingPage />}>
                    <Route path="/login" element={<LoginMenu />} />
                    <Route path="/user-select-site" element={<UserSetSiteMenu />} />
                </Route>

                <Route path="/menu" element={<SideBar />}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Route>

 */