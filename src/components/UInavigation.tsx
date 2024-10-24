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
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Iroutes } from '../routes/routes';
import AuthButtons from './AuthButtons';
import { useAuthContext } from '../context/AuthContext';
import { CircularProgress } from '@mui/material';




interface UInavprops {
    routes:Iroutes[]
}

const UInavigation:React.FC<UInavprops> = ({routes}) =>  {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const auth = {token:true}
  const {user:{email},loading,logout} = useAuthContext()
  const settings = [{title:'Profile',action: () => navigation('/getuser')}, {title: 'Logout',action:logout}];
  const navigation = useNavigate()
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (path:string) => {
    setAnchorElNav(null);
    navigation(path)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {routes.map(({label,path}) => (
                <MenuItem key={path} onClick={() => handleCloseNavMenu(path)}>
                  <Typography sx={{ textAlign: 'center' }}>{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {routes.map(({label,path}) => (
              <Button
                key={path}
                onClick={() => handleCloseNavMenu(path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {label}
              </Button>
            ))}
          </Box>
          {loading ? <CircularProgress disableShrink style={{color:'white'}}/> : email ?  <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({action,title}) => (
                <MenuItem key={title} onClick={handleCloseUserMenu} >
                  <Button onClick={action}>
                    <Typography sx={{ textAlign: 'center' }}>{title}</Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box> : <AuthButtons/> }
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet/>
    </>
  );
}
export default UInavigation