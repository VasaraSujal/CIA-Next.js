import React from 'react';
import { Container } from '@mui/material';
import Navigation from '../components/Navigation';

const HomePage = () => {
    return (
        <Container>
            <Navigation />
            <h1>Welcome to the Next.js MUI App</h1>
            <p>Select a route from the navigation to see different Material UI components.</p>
        </Container>
    );
};

export default HomePage;