import { createContext } from 'react';

const authContext = createContext({
  isLoggedIn: false, // to check if authenticated or not
  setIsLoggedIn: () => {}
});

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;
export default authContext;
