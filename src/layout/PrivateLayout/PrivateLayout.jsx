import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { Sidebar } from '../../components';
import  Navbar from '../Navbar';
import { blueGrey } from '@mui/material/colors';

const PrivateLayout = ({ children }) => {
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: collapsed ? '4rem 1fr' : '18rem 1fr',
      minHeight: '100vh',
      gridTemplateAreas: `
        "sidebar main"
      `,
    }}>
      <nav style={{
        gridArea: 'sidebar',
        width: collapsed ? '4rem' : '17.5rem',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
      }}>
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      </nav>
      
      <div style={{
        gridArea: 'main',
        display: 'flex',
        flexDirection: 'column',
      }}>

        <Navbar />
        <main style={{
          flexGrow: 1,
          padding: '2rem',
          backgroundColor: blueGrey[50],
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}>
          <Container>
            {children}
          </Container>
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
