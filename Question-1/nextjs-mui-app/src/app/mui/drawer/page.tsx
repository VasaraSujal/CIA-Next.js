import React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

const DrawerPage = () => {
    return (
        <Drawer variant="permanent" anchor="left">
            <Typography variant="h6" component="div" style={{ padding: 16 }}>
                Route: /mui/drawer
            </Typography>
        </Drawer>
    );
};

export default DrawerPage;