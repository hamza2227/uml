import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from '@material-ui/styles';
import { width } from '@mui/system';
import { BlurOn } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Dashboard from '@mui/icons-material/Dashboard';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 , position:'absolute', 
    bottom:0,
    left:400,
    right:0,
    top:3456,
    
    }}  >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        id='root'>
        <BottomNavigationAction  label="GLOBAL CASES" icon={<BlurOn/>} />
        <BottomNavigationAction className='GLOBAL DEATHS' label="GLOBAL DEATHS" icon={<Dashboard/>} />
        <BottomNavigationAction  label="GLOBAL RECOVERD" icon={<DoneOutlineIcon/>} />
      </BottomNavigation>
    </Box>
  );
}
