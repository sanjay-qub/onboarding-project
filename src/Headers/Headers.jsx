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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
const pages = [

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

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
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
                <Tooltip title="LeaderBoard" style={{ marginLeft: 'auto' }} >
                <Link to={"/leaderBoard"} >
                  <IconButton>
                    <LeaderboardIcon fontSize="medium" style={{ color: 'white',marginTop:"3px" }} />
                  </IconButton>

                </Link>
              </Tooltip>


               <Tooltip 
                title={
                  User.name && User.email
                    ? `Name: ${User.name} \nEmail: ${User.email}`
                    : 'No user Data'
                }
              >
                <IconButton  onClick={handlePopoverOpen}>
                  {User.name && User.email ? (
                    <Avatar alt="">
                      {User.name.charAt(0).toUpperCase()}
                    </Avatar>
                  ) : (
                    <Avatar src="/broken-image.jpg" />
                  )}
                </IconButton>
              </Tooltip>

              {/* LeaderBoard Tooltip */}
            



            </Box>
          </Toolbar>



        </Container>
      </AppBar>
    </ThemeProvider>
  </div>
  )
}

export default Headers