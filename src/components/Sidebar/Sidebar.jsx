import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
  FaGem,
  FaList,
  FaRegLaughWink,
  FaHeart,
  FaChartBar,
} from 'react-icons/fa';
import { HiLogout } from 'react-icons/hi';
import { MdDashboardCustomize } from 'react-icons/md';
import { ViewSidebarRounded } from '@mui/icons-material';
import { Box, Typography, Button, Divider } from '@mui/material';
import theme from '../../../theme';
import { useAuth } from '../../Auth';
const index = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    
  };
  return (
    <Sidebar
      anchor="left"
      sx={{
        '& .simplebar-scrollbar': {
          display: 'none',
        },
        '& .simplebar-content': {
          height: '100vh',
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400',
        },
      }}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="lg"
      collapsedWidth="4rem"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Menu
          menuItemStyles={{
            root: {
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.success,
              },
            },
            button: {
              [`&.active`]: {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.success,
              },
            },
          }}
          toggleButtonStyles={{
            root: {
              display: 'none',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem',
              alignContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Box
              style={{
                marginTop: '1rem',
                display: 'flex',
                width: '90%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: '0 0 0 1.8rem',
                alignItems: 'center',
              }}
            >
              <Typography
                onClick={handleCollapsedChange}
                variant="h6"
                sx={{ fontWeight: 'bold', py: 2, cursor: 'pointer' }}
              >
                {collapsed ? 'EV' : 'E - Voting'}
              </Typography>
              <Button
                sx={{ cursor: 'pointer' }}
                onClick={handleCollapsedChange}
              >
                {<FaAngleDoubleLeft />}
              </Button>
            </Box>
            <Box>
              <MenuItem
                icon={<FaUser />}
                component={<Link to="/e-voting-system/my-profile" />}
              >
                My Profile
              </MenuItem>
              <MenuItem
                icon={<MdDashboardCustomize />}
                component={<Link to="/e-voting-system" />}
              >
                Voting Dashboard
              </MenuItem>
              <MenuItem
                icon={<FaChartBar />}
                component={<Link to="/e-voting-system/electorial-matrix" />}
              >
                Result Matrix
              </MenuItem>
            </Box>
            <MenuItem
              icon={<HiLogout />}
              onClick={handleLogout}
            >
              Logout
            </MenuItem>
          </Box>
        </Menu>
      </Box>
    </Sidebar>
  );
};

export default index;
