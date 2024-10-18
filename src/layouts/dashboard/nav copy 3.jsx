import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { Menu, MenuItem } from '@mui/material';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';

import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';
import navConfig from './config-navigation';
import { asyncUserSignout } from 'src/store/Actions/userActions';
import { useEffect, useState } from 'react';

// Define the width for navigation
const NAV_WIDTH = 280; // Adjust according to your layout

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();
  const upLg = useResponsive('up', 'lg');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const role = user.role; // Access role directly from user
  const navigationLinks = navConfig(role);

  // Close navigation on pathname change
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname, openNav, onCloseNav]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(asyncUserSignout());
  };

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar src={user.avatar} alt="photoURL" />
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{user.username}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {user.role}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navigationLinks.map((item) => 
        item.children 
          ? <NavItemWithPopup key={item.title} item={item} /> 
          : <NavItem key={item.title} item={item} />
      )}
    </Stack>
  );

  const renderUpgrade = (
    <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
      <Stack alignItems="center" spacing={3} sx={{ pt: 5 }}>
        <Button onClick={handleLogout} variant="outlined" color="error">
          Log Out
        </Button>
      </Stack>
    </Box>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 4 }} />
      {renderAccount}
      {renderMenu}
      <Box sx={{ flexGrow: 1 }} />
      {renderUpgrade}
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
        position: 'relative',
        overflow: 'visible',
        boxShadow: `4px 0 8px rgba(0, 100, 168, 0.08), 8px 0 16px rgba(50, 50, 71, 0.06)`,
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV_WIDTH,
            overflowY: 'auto',
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              overflowY: 'auto',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool.isRequired,
  onCloseNav: PropTypes.func.isRequired,
};

// ----------------------------------------------------------------------

function NavItemWithPopup({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopup = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopup = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItemButton
        onClick={handleOpenPopup}
        sx={{
          minHeight: 44,
          borderRadius: 0.75,
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          },
        }}
      >
        <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
          {item.icon}
        </Box>
        <Box component="span">{item.title}</Box>
      </ListItemButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClosePopup}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: {
            '&:focus': {
              outline: 'none',
            },
          },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        {item.children.map((subItem) => (
          <MenuItemWithSubmenu key={subItem.title} item={subItem} />
        ))}
      </Menu>
    </>
  );
}

// Update MenuItemWithSubmenu to handle redirection
function MenuItemWithSubmenu({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const pathname = usePathname(); // Get current pathname for active state

  const handleOpenSubPopup = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSubPopup = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuItem onClick={handleOpenSubPopup}>
        {item.title}
      </MenuItem>
      {item.children && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseSubPopup}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {item.children.map((subSubItem) => {
            const isActive = pathname === subSubItem.path; // Check if this is the active path

            return (
              <MenuItem
                key={subSubItem.title}
                component={RouterLink}
                to={subSubItem.path}
                sx={{
                  ...(isActive && {
                    backgroundColor: 'rgba(0, 0, 255, 0.1)', // Example active color
                  }),
                }}
              >
                {subSubItem.title}
              </MenuItem>
            );
          })}
        </Menu>
      )}
    </>
  );
}

MenuItemWithSubmenu.propTypes = {
  item: PropTypes.object.isRequired,
};

NavItemWithPopup.propTypes = {
  item: PropTypes.object.isRequired,
};

const NavItem = ({ item }) => {
  const pathname = usePathname();
  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.lighter',
          fontWeight: 'fontWeightSemiBold',
          background: 'linear-gradient(0deg, #243771 0%, navy 100%)',
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>
      <Box component="span">{item.title}</Box>
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
};
