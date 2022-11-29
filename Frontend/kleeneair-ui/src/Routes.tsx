import {Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dash/Dashboard';
import LandingPage from './Pages/LandingPage';
import LoginMenu from './Pages/Login';
import RegisterUser from './Pages/Register';
import UserSetSiteMenu from './Pages/UserSetSiteMenu';

export default function MainRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<LoginMenu />} />
                <Route path="/register" element={<RegisterUser/>}/>
                <Route path="/user-select-site" element={<UserSetSiteMenu />} />
                <Route path="/dashboard" element={<Dashboard />} />
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