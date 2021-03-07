import axios from 'axios';

export const signUpService = async body => {
  try {
    const userInfo = await axios.post('http://localhost:3030/sign-up', body);
    return userInfo?.data;
  } catch (e) {
    throw e;
  }
};

export const logoutAdmin = () => {
  sessionStorage.removeItem('token');
};
