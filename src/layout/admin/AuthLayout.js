import React from 'react';
import { Grid, CssBaseline } from '@material-ui/core';
import SubRoute from '../../Config/SubRoute';

const AuthLayout = ({ routes }) => {
  return (
    <Grid>
      <CssBaseline />

      {routes.map((route, i) => (
        <SubRoute key={i} {...route} />
      ))}
    </Grid>
  );
};

export default AuthLayout;
