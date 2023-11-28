import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { useState } from 'react';

const pages = [
  { name: "Features", link: "/" },
  { name: "API", link: "/" },
  { name: 'QUIZ', link: '/' },
  { name: 'CONTACT', link: '/' },
  { name: 'CONTRIBUTE', link: '/' },
  { name: '|',},
];
const settings = [];


function Headers() {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#24292e', 
            
          },
        },
      });
      const User = useSelector((state) => state.quizzSlice.UserDetails);




    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  
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

  const handleAvatarClick = (event) => {
    if (User.name && User.email) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to={"/"}>
              <img src="/" className='w-8' alt="" />
            </Link>
            <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu">
              <Link to={"/"}>
                <img src="/" className='w-36' alt="" />
                QUIZZO
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
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
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem className='' key={page.link} onClick={handleCloseNavMenu}>
                    <Typography className='' textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "center", fontWeight: "500", color: "rgba(255, 255, 255, 0.65)" } }}>
              {pages.map((page) => (
                <Link to={page.link}>
                  <Button 
                    key={page.link}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'rgba(255, 255, 255, 0.65)',
                      display: 'block',
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "0.87em",
                      wordSpacing: "2px",
                      paddingLeft: "1.125rem",
                      paddingRight: "1.125rem"
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}


              <Button 
                sx={{
                  backgroundColor: '#3cd458', 
                  fontSize: '0.8rem',
                  borderRadius: '2.25rem',
                  padding: '0.5rem 1rem',
                  marginRight: '0.5rem',
                  width: "6rem",
                  height: "37px",
                  marginTop: "16px",
                }}
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
              <Button
                sx={{
                  backgroundColor: '#3cd458', 
                  fontSize: '0.8rem',
                  borderRadius: '2.25rem',
                  padding: '0.5rem 1rem',
                  marginRight: '0.5rem',
                  width: "6rem",
                  height: "37px",
                  marginTop: "16px",
                }}
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>

              <Tooltip  placement="right">
        <IconButton onClick={handleAvatarClick}>
          <Avatar>{User.name ? User.name[0] : '?'}</Avatar>
        </IconButton>
      </Tooltip>
      {User.name && User.email && (
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div style={{ padding: '10px' }}>
          <p>Name: {User.name}</p>
          <p>Email: {User.email}</p>
        </div>
      </Popover>
    )}
<Link to={"/leaderBoard"}>
    <Button
                sx={{
                  backgroundColor: '#3cd458', 
                  fontSize: '0.8rem',
                  borderRadius: '2.25rem',
                  padding: '0.5rem 1rem',
                  marginRight: '0.5rem',
                  width: "10rem",
                  height: "37px",
                  marginTop: "16px",
                }}
                variant="contained"
                color="primary"
              >LeaderBoard
              </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  </div>
  )
}

export default Headers