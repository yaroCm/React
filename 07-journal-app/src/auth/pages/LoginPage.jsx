import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import React, { useMemo } from 'react';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { chekingAuth } from '../../store/auth/chekingAuth';
import { chekingGoogle } from '../../store/auth/chekingGoogle';

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  });
  const isCheking = useMemo(() => status === 'cheking', [status]);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(chekingAuth());
  };

  const onGoogleSignIn = () => {
    console.log('google');
    dispatch(chekingGoogle());
  };
  return (
    <AuthLayout title={'Login'}>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type={'email'}
              placeholder='Add the email'
              name='email'
              value={email}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type={'password'}
              name='password'
              value={password}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={isCheking}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                onClick={onGoogleSignIn}
                variant='contained'
                fullWidth
                disabled={isCheking}
              >
                <Google />
                <Typography sx={{ ml: 1 }}> Google</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='end'>
          <Link component={RouteLink} color='inherit' to={'/auth/register'}>
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
