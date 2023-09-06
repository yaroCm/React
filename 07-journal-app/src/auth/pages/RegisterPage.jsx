// @ts-nocheck
import { Alert, Button, Grid, Link, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouteLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import { checkingUserPass } from '../../store/auth/checkingUserPass ';

export const RegisterPage = () => {
  const [isDirty, setIsDirty] = useState(false);
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.auth);

  const formValues = {
    email: '',
    password: '',
    displayName: '',
    validators: [
      {
        name: 'email',
        fn: (value) => value.includes('@'),
        message: 'El correo debe de tener un @',
      },
      {
        name: 'password',
        fn: (value) => value.length >= 6,
        message: 'El password debe de tener más de 6 caracteres',
      },
      {
        name: 'displayName',
        fn: (value) => value.length >= 3,
        message: 'El name es requerido',
      },
    ],
  };

  const {
    email,
    password,
    displayName,
    onInputChange,
    isDisplayNameValid,
    errorDisplayNameMessage,
    isEmailValid,
    errorEmailMessage,
    isPasswordValid,
    errorPasswordMessage,
    isFormValid,
  } = useForm(formValues);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingUserPass({ email, password, displayName }));
  };

  return (
    <AuthLayout title={'Register'}>
      <form onSubmit={onSubmit} onChange={() => setIsDirty(true)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              value={displayName}
              name='displayName'
              label='Name'
              type='text'
              placeholder='Add your name'
              onChange={onInputChange}
              fullWidth
              error={!isDisplayNameValid && isDirty}
              helperText={isDirty ? errorDisplayNameMessage : ''}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              value={email}
              name='email'
              label='Email'
              type='email'
              placeholder='Add the email'
              onChange={onInputChange}
              fullWidth
              error={!isEmailValid && isDirty}
              helperText={isDirty ? errorEmailMessage : ''}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              value={password}
              name='password'
              label='Password'
              type='password'
              onChange={onInputChange}
              fullWidth
              error={!isPasswordValid && isDirty}
              helperText={isDirty ? errorPasswordMessage : ''}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={!isFormValid}
                type='submit'
                variant='contained'
                fullWidth
              >
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
