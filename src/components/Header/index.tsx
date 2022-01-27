import { FC, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '../Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './style.scss'

export default function PrimarySearchAppBar() {
  const isAuth = useTypedSelector(state => state.user.isAuth)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      className="menu"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/profile">
        <MenuItem className="menu__item" dense onClick={handleMenuClose}>
          <AccountCircle className='menu__icon' />
          <p>Profile</p>
        </MenuItem>
      </Link>


      <Link to="/settings">
        <MenuItem className="menu__item" dense onClick={handleMenuClose}>
          <SettingsIcon className='menu__icon' />
          <p>Settings</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem dense onClick={handleProfileMenuOpen}>
        <IconButton
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      <Divider />

      <MenuItem dense>
        <IconButton
          color="inherit"
        >
          <LogoutIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <header className='header'>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/">
            Header
          </Link>
        </Box>

        <>
          {!isAuth &&
            <>
              <Link to="/sign-in">
                <Button
                  className='header__button'
                  text
                  sx={{ display: { xs: 'none', md: 'flex', textTransform: 'capitalize', marginRight: 10 } }}
                >
                  Login
                </Button>
              </Link>

              <Link to="/sign-up">
                <Button
                  className='header__button-register'
                  sx={{ display: { xs: 'none', md: 'flex', textTransform: 'capitalize' } }}
                >
                  Create account
                </Button>
              </Link>
            </>}
        </>

        <>
          {isAuth &&
            <>
              <Link to="/profile">
                <IconButton
                  className='header__item'
                  size="large"
                  edge="end"
                >
                  <AccountCircle fontSize="large" />
                </IconButton>
              </Link>

              <IconButton
                className='header__item'
                size="small"
                edge="start"
                onClick={handleProfileMenuOpen}
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <ArrowDropDownIcon />
              </IconButton>

              <Button
                text
                sx={{ display: { xs: 'none', md: 'flex', textTransform: 'capitalize' } }}
              >
                Logout
              </Button>
            </>}
        </>


        <IconButton
          className='header__button'
          size="large"
          onClick={handleMobileMenuOpen}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MoreIcon fontSize="large" />
        </IconButton>
      </Toolbar>
      {renderMobileMenu}
      {renderMenu}
    </header>
  );
}


// const Header: FC = () => {
//   const [auth, setAuth] = useState(true);

//   return (
//     <>
//       {auth &&
//         <header className='header'>
//           <Link to="/">
//             Header
//           </Link>

//           <Grid container justifyContent="end">
//             <Grid item>
//               <Link to="/settings">
//                 <IconButton size="large" color="inherit">
//                   <SettingsIcon />
//                 </IconButton>
//               </Link>
//             </Grid>
//           </Grid>
//         </header>}
//     </>
//   )
// }

// export default Header