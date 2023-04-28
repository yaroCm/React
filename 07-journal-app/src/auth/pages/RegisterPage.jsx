import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouteLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { chekingAuth } from '../../store/auth/chekingAuth';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  const dispatch = useDispatch();
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
    displayName,
    email,
    password,
    onInputChange,
    createValidators,
    isDisplayNameValid,
    errorDisplayNameMessage,
    formState,
    isValidForm,
  } = useForm(formValues);
  console.log('formState', formState);
  console.log('isValidForm', isValidForm);
  const onSubmit = (event) => {
    event.preventDefault();
    createValidators();
    console.log({ email, password, displayName });
    dispatch(chekingAuth());
  };

  return (
    <AuthLayout title={'Register'}>
      <form onSubmit={onSubmit}>
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
              error
              helperText={'El nombre es obligatorio'}
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
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth>
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
