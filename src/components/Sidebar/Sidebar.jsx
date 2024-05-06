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
import { Box, Typography, Button } from '@mui/material';
import theme from '../../../theme';
const index = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  return (
    <Sidebar
      style={{
        backgroundColor: 'green',
        borderRadius: '0 20px 20px 0',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
        height: '80vh',
      }}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="lg"
      collapsedWidth="4rem"
    >
      <Menu
        iconShape="circle"
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
            <Button sx={{ cursor: 'pointer' }} onClick={handleCollapsedChange}>
              {<FaAngleDoubleLeft />}
            </Button>
          </Box>
          <Box>
            <MenuItem
              icon={<FaUser />}
              component={<Link to="/e-voting-system/profile" />}
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
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </MenuItem>
        </Box>
      </Menu>
    </Sidebar>
  );
};

export default index;