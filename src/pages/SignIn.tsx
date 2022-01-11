import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Title } from '../components/Typography';
import '../shared/Form.scss'

const SignIn = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container maxWidth="xs" className='form'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar className='form__avatar'>
          <LockOutlinedIcon />
        </Avatar>

        <Title className='form__title' variant='h5'>
          Sign in
        </Title>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            className="form__input"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
          />

          <TextField
            className="form__input"
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
          />

          <FormControlLabel
            control={
              <Checkbox className="form__checkbox" value="remember"/>
            }
            label="Remember me"
          />

          <Button
            type="submit"
            className="form__button"
            fullWidth
            sx={{ p: 1 }}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link to="#" className='form__link'>
                Forgot password?
              </Link>
            </Grid>

            <Grid item>
              <Link to="/sign-up" className='form__link'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container >
  )
}

export default SignIn