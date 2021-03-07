import React from 'react';
import { Route } from 'react-router-dom';
const PrivateRoute = props => {
  return (
    <Route
      path={props.path}
      render={innerProps => {
        return (
          <props.component
            {...innerProps}
            {...props}
            routes={props.routes}
            roles={props.roles}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
