import React from 'react';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'
import './Header.scss'

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className='header'>
        <Link to="/">
          Header
        </Link>

        <Grid container justifyContent="end">
          <Grid item>
            <Link to="/settings">
              <IconButton size="large" color="inherit">
                <SettingsIcon />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </header>
    )
  }
}

export default Header