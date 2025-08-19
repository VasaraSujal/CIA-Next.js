import React from 'react';
import { Tabs, Tab } from '@mui/material';

const TabsPage = () => {
    return (
        <div>
            <h1>Route: /mui/navigation/tabs</h1>
            <Tabs>
                <Tab label="Tab 1" />
                <Tab label="Tab 2" />
                <Tab label="Tab 3" />
            </Tabs>
        </div>
    );
};

export default TabsPage;