import React from 'react';
import { AuthProvider } from '../Config/authContext';
import { useSelector } from 'react-redux';
const Auth = ({ children, restoreSessionUserInfo }) => {
  const homePage = '/app/d';

  const { isLoggedIn } = useSelector(state => state?.loginReducer);

  const authProviderValue = {
    isLoggedIn,
    homePage
  };

  return <AuthProvider value={authProviderValue}>{children}</AuthProvider>;
};

export default Auth;
