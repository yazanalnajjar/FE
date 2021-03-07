import {
  Typography,
  makeStyles,
  TextField,
  Box,
  darken,
  CardContent,
  InputLabel,
  Card,
  NativeSelect,
  FormControl,
  Button
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import {
  getLoggedInActionAdmin,
  getLoggedInActionCustomer
} from '../../store/Actions';
const useStyles = makeStyles(theme => ({
  root: {
    margin: 10,
    width: '37%',
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
  formControl: {
    marginBottom: theme.spacing(4),
    minWidth: 120
  },
  test: {
    background: `radial-gradient(${darken(
      theme.palette.primary.dark,
      0.5
    )} 0%, ${theme.palette.primary.dark} 80%)`,
    color: theme.palette.primary.contrastText
  }
}));

function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const [admin, setAdmin] = useState(true);
  const [customer, setCustomer] = useState(false);

  const handleChange = (item, value) => {
    setInput({
      ...input,
      [item]: value
    });
  };

  const handleRoleChange = value => {
    if (value === 'admin') {
      setAdmin(!admin);
      setCustomer(!customer);
    } else if (value === 'customer') {
      setCustomer(!customer);
      setAdmin(!admin);
    }
  };
  const isFormValid = () => {
    return input?.email?.length > 0 && input?.password?.length > 0;
  };
  const resetForm = () => {
    setInput({
      email: '',
      password: ''
    });
    setAdmin(true);
    setCustomer(false);
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    let prepareBody;
    if (admin === true) {
      prepareBody = {
        ...input,
        role: 'admin'
      };
      dispatch(getLoggedInActionAdmin(prepareBody));
    } else {
      prepareBody = {
        ...input,
        role: 'customer'
      };

      dispatch(getLoggedInActionCustomer(prepareBody));
    }
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
      <div className={classes.root} style={{ padding: 50 }}>
        <div>
          <Card
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'space-between'
            }}
          >
            <CardContent>
              <Typography variant="h6">LOGIN TO YOUR ACCOUNT</Typography>

              <form
                name="loginForm"
                noValidate
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'space-between'
                }}
                onSubmit={handleSubmit}
              >
                <TextField
                  style={{ marginTop: 15, marginBottom: 5 }}
                  label="Email"
                  autoFocus
                  type="email"
                  margin="normal"
                  name="email"
                  value={input?.email}
                  onChange={e => handleChange('email', e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                />

                <TextField
                  style={{ marginBottom: 20 }}
                  label="Password"
                  type="password"
                  name="password"
                  margin="normal"
                  value={input?.password}
                  onChange={e => handleChange('password', e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                />

                <FormControl required className={classes.formControl}>
                  <InputLabel>Role</InputLabel>
                  <NativeSelect
                    defaultChecked={'admin'}
                    onChange={e => handleRoleChange(e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                  </NativeSelect>
                </FormControl>
                <Button
                  style={{ marginBottom: 30 }}
                  variant="contained"
                  color="primary"
                  // onClick={loggedInClicked}
                  // className="w-224 mx-auto mt-16"
                  aria-label="LOG IN"
                  disabled={!isFormValid()}
                  type="submit"
                >
                  LOGIN
                </Button>
              </form>

              <div>
                <span>Don't have an account?</span>
                <Link to="/auth/signup">Create an account</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Box>
  );
}

export default LoginPage;
