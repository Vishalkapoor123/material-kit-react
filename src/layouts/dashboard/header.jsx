import { Button, Container } from '@material-ui/core';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// import Searchbar from './common/searchbar';
import { NAV, HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
import LanguagePopover from './common/language-popover';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      {/* <Searchbar /> */}
      <Container>
      <Toolbar>
        <Button href="#page-top" color="inherit" underline="none">
          React Landing Page
        </Button>
        <div style={{ flexGrow: 1 }} />
        <Button href="#features" color="inherit" underline="none">
          Features
        </Button>
        <Button href="#about" color="inherit" underline="none">
          About
        </Button>
        <Button href="#services" color="inherit" underline="none">
          Services
        </Button>
        <Button href="#portfolio" color="inherit" underline="none">
          Gallery
        </Button>
        <Button href="#testimonials" color="inherit" underline="none">
          Testimonials
        </Button>
        <Button href="#team" color="inherit" underline="none">
          Team
        </Button>
        <Button href="#contact" color="inherit" underline="none">
          Contact
        </Button>
      </Toolbar>
    </Container>

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        <LanguagePopover />
        {/* <NotificationsPopover /> */}
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
