import { Provider } from 'react-redux';
import React from 'react';
import { jssPreset, StylesProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { create } from 'jss';
import { store } from './store';
import Auth from './Pages/Auth';
import history from './Config/history';
import Routes from './Config/customer/routes';
import AdminRoutes from './Config/admin/routes';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend(), rtl()],
  insertionPoint: document.getElementById('jss-insertion-point')
});

const App = () => {
  return (
    <Provider store={store}>
      <StylesProvider jss={jss}>
        <Auth>
          <Router history={history}>
            {process.env.REACT_APP_NAME === 'admin' ? (
              <AdminRoutes />
            ) : (
              <Routes />
            )}
          </Router>
        </Auth>
      </StylesProvider>
    </Provider>
  );
};

export default App;
