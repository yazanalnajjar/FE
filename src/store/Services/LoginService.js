import axios from 'axios';

export const loginAdminUser = async body => {
  try {
    const userInfo = await axios.post(
      'http://localhost:3030/authenticate-admin',
      body
      // {
      //   headers: body
      // }
    );
    const { access_token, ...restData } = userInfo?.data;
    sessionStorage.setItem('token-admin', userInfo?.data.access_token);
    return restData;
  } catch (e) {
    throw e;
  }
};

export const loginAsCustomer = async body => {
  try {
    const userInfo = await axios.post(
      'http://localhost:3030/authenticate-customer',
      body
    );
    const { access_token, ...restData } = userInfo?.data;
    sessionStorage.setItem('token-customer', userInfo?.data.access_token);
    return restData;
  } catch (e) {
    throw e;
  }
};
export const logoutAdmin = () => {
  sessionStorage.removeItem('token');
};
