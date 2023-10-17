import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const pages = [
  { name: "Allocations", link: "/allocation" },
  { name: "Systems", link: "/Systems" },
  { name: 'Locations', link: '/locations' },
  { name: 'Equipment', link: '/equipment' },
  { name: 'Business Entities', link: '/business-entities' },
  { name: 'Admin', link: '/admin' },
  { name: 'History', link: '/history' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Headers() {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#1e1b4b', 
          },
        },
      });
      



    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <div>
        <ThemeProvider theme={theme}>

<AppBar position="static ">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Link to={"/"}>
            <img src="/spl-logo-only.png" className='w-8' alt="" />
            </Link>

      
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
     
          <Link to={"/"}>
          <img src="/surephase.png" className='w-36' alt="" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             {pages.map((page) => (
                
         <MenuItem className='bg-orange-400' key={page.link} onClick={handleCloseNavMenu}>
     
          <Typography className='bg-amber-500' textAlign="center">{page.name}</Typography>
          
      
        </MenuItem>
     
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              bgcolor: 'warning.main'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
     
          {pages.map((page) => (
              <Link to={page.link}>
  <Button 
    key={page.link}
    onClick={handleCloseNavMenu}
    sx={{ my: 2, color: 'white', display: 'block' }}
  >
    {page.name}
  </Button>
  </Link>
            ))}
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
    </div>
  )
}

export default Headers