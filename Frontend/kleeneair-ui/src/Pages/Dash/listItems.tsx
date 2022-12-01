import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LogoutIcon from '@mui/icons-material/Logout';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const mainListItems = (

    <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
               <LocationCityIcon />
      </ListItemIcon>
      <ListItemText primary="Sites" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
                <BookOnlineIcon />
      </ListItemIcon>
      <ListItemText primary="Appointments" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
                <NotificationsNoneIcon />
      </ListItemIcon>
      <ListItemText primary="Reminders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
                <SupportAgentIcon />
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
                <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
                <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);