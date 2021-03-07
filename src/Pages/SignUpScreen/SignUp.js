import {
  darken,
  TextField,
  CardContent,
  Button,
  Card,
  InputLabel,
  NativeSelect,
  Typography,
  Box,
  makeStyles,
  FormControl
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpForBothAdminAndCustomer } from '../../store/Actions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '33%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: `radial-gradient(${darken(
      theme.palette.primary.dark,
      0.5
    )} 0%, ${theme.palette.primary.dark} 10%)`,
    color: theme.palette.primary.contrastText
  },
  test: {
    background: `radial-gradient(${darken(
      theme.palette.primary.dark,
      0.5
    )} 0%, ${theme.palette.primary.dark} 80%)`,
    color: theme.palette.primary.contrastText
  },
  formControl: {
    margin: theme.spacing(3, 0)
  }
}));

function RegisterPage() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [filterInputs, setFilterInput] = useState({
    name: '',
    email: '',
    password: ''
  });

  const resetForm = () => {
    setFilterInput({
      name: '',
      email: '',
      password: ''
    });
  };

  function isFormValid() {
    return (
      filterInputs.email.length > 0 &&
      filterInputs.password.length > 0 &&
      filterInputs.password.length > 3
    );
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    dispatch(signUpForBothAdminAndCustomer({ ...filterInputs, role: role }));
    // if (signedUpSuccess) {
    //   // history.push('/auth/login');
    //   <SnackBarComponent open={true} text={'SUCCESS'} />;
    // } else {
    //   <SnackBarComponent open={true} text={'FAILURE'} />;
    // }
    resetForm();
  }

  const [role, setRole] = useState('admin');
  const handleRoleChange = value => {
    setRole(value);
  };
  const handleDataChange = (item, value) => {
    setFilterInput({
      ...filterInputs,
      [item]: value
    });
  };

  return (
    <Box
      className={classes.test}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <div className={classes.root}>
        <div
          style={{
            padding: 30
          }}
        >
          <Card
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'space-between'
            }}
          >
            <CardContent>
              <Typography
                style={{
                  fontWeight: 'bold',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}
              >
                CREATE AN ACCOUNT
              </Typography>

              <form
                name="registerForm"
                noValidate
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'space-between'
                }}
              >
                <TextField
                  label="Name"
                  autoFocus
                  style={{ marginTop: 10, marginBottom: 10 }}
                  type="name"
                  name="name"
                  margin="none"
                  value={filterInputs.name}
                  onChange={e => handleDataChange('name', e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                />

                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  style={{ marginTop: 10, marginBottom: 10 }}
                  value={filterInputs.email}
                  onChange={e => handleDataChange('email', e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                />

                <TextField
                  label="Password"
                  style={{ marginTop: 10, marginBottom: 10 }}
                  type="password"
                  name="password"
                  value={filterInputs.password}
                  onChange={e => handleDataChange('password', e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                />

                <FormControl required className={classes.formControl}>
                  <InputLabel>Role</InputLabel>
                  <NativeSelect
                    defaultChecked={''}
                    onChange={e => handleRoleChange(e.target.value)}
                  >
                    <option value={'admin'}>Admin</option>
                    <option value={'customer'}>Customer</option>
                  </NativeSelect>
                </FormControl>

                <Button
                  variant="contained"
                  color="primary"
                  aria-label="Register"
                  disabled={!isFormValid()}
                  type="submit"
                  style={{ marginBottom: 10 }}
                >
                  CREATE AN ACCOUNT
                </Button>
              </form>

              <div>
                <span>Already have an account?</span>
                <Link to="/auth/login">Login</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Box>
  );
}

export default RegisterPage;
