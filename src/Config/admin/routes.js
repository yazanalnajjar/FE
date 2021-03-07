import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import SubRoute from '../SubRoute';
import AppLayout from '../../layout/admin/AppLayout';
import PrivateRoute from '../PrivateRoute';
import { CircularProgress, Box } from '@material-ui/core';

const AuthLayout = lazy(() => import('../../layout/admin/AuthLayout'));

const NotFound = lazy(() => import('../../Components/Common/notfound'));

const publicRoute = [
  {
    path: '/auth/login',
    component: lazy(() => import('../../Pages/LoginScreen/Login'))
  },

  {
    path: '/auth/signup',
    component: lazy(() => import('../../Pages/SignUpScreen/SignUp'))
  }
];

const protectedRoutes = [
  {
    path: '/app/complaint-history',
    component: lazy(() =>
      import('../../Pages/ComplaintHistory/ComplaintHistory')
    )
  },
  {
    path: '/app/add-complaint',
    component: lazy(() => import('../../Pages/AddComplaint/AddComplaint'))
  }
];
const Routes = () => {
  return (
    <Suspense
      fallback={
        <Box
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CircularProgress size={80} thickness={2.2} />
        </Box>
      }
    >
      <Switch>
        <SubRoute path="/auth" component={AuthLayout} routes={publicRoute} />

        <PrivateRoute
          path="/app"
          component={AppLayout}
          routes={protectedRoutes}
          // exact={true}
        />
        {/* <Redirect from="/" to="/app" exact /> */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
