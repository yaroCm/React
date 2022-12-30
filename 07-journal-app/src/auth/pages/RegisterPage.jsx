import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title={'Register'}>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Name'
              type={'text'}
              placeholder='Add your name'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type={'email'}
              placeholder='Add the email'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Password' type={'password'} fullWidth />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='end'>
          ¿Ya tienes cuenta? &nbsp;
          <Link component={RouteLink} color='inherit' to={'/auth/login'}>
            ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
