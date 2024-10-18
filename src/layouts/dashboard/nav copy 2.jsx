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

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { account } from 'src/_mock/account';

import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';

import { NAV } from './config-layout';
import navConfig from './config-navigation';
import { useEffect, useState } from 'react';
import { asyncUserSignout } from 'src/store/Actions/userActions';
import { Menu, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();
  const upLg = useResponsive('up', 'lg');
  const dispatch = useDispatch();
  const role = useSelector((state) => state.user.user.role);
  const navigationLinks = navConfig(role);

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      dispatch(asyncUserSignout());
    } catch (error) {
      console.error(error);
    }
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
      <Avatar src={account.photoURL} alt="photoURL" />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{account.displayName}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {account.role}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navigationLinks.map((item) => {
        if (item.children) {
          return <NavItemWithPopup key={item.title} item={item} />;
        }
        return <NavItem key={item.title} item={item} />;
      })}
    </Stack>
  );

  const renderUpgrade = (
    <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
      <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
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
        width: { lg: NAV.WIDTH },
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            overflowY: 'auto',
            overflowX: 'visible', // Allow overflow for popups
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
              width: NAV.WIDTH,
              overflowY: 'auto',
              overflowX: 'visible',
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
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
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
        // Open menu to the right of the anchor
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right', // Main menu opens to the right
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left', // Menu animation starts from the left
        }}
      >
        {item.children.map((subItem) => (
          <MenuItemWithSubmenu key={subItem.title} item={subItem} />
        ))}
      </Menu>
    </>
  );
}

// Component for handling submenus inside the main popup
function MenuItemWithSubmenu({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);

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
          // Open submenu further to the right of the parent menu
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right', // Submenu opens to the right
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left', // Submenu animation starts from the left
          }}
        >
          {item.children.map((subSubItem) => (
            <MenuItem key={subSubItem.title}>{subSubItem.title}</MenuItem>
          ))}
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

function NavItem({ item }) {
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
}

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
};
