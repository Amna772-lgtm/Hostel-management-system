import React from 'react';
import Sidenav from '../components/SideNav';
import Navbar from '../components/Navbar';
import Dashboard from './Dashboard';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Toolbar from '@mui/material/Toolbar';

export default function Home() {
  return (
    <>
        <Navbar/>
        <Box height={30}/>
        <Box sx={{ display: 'flex' }}>
            <Sidenav/>

            <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>


            </Box>
       </Box>
    </>
  );
}