import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const navItems = [
  { label: 'Drawer', href: '/mui/drawer' },
  { label: 'Button', href: '/mui/button' },
  { label: 'Card', href: '/mui/card' },
  { label: 'Dialog', href: '/mui/dialog' },
  { label: 'Typography', href: '/mui/typography' },
  { label: 'AppBar', href: '/mui/navigation/appbar' },
  { label: 'Tabs', href: '/mui/navigation/tabs' },
  { label: 'Profile', href: '/profile/username' },
  { label: 'Blog', href: '/blog/1' },
];

const Navigation: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        width: '110%',
        left: 0,
        right: 0,
        background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Logo / Brand */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            letterSpacing: 1,
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          🌐 Next.js MUI
        </Typography>

        {/* Nav Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {navItems.map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              sx={{
                color: '#fff',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                transition: '0.3s',
                '&:hover': {
                  color: '#ffeb3b',
                  transform: 'scale(1.05)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
