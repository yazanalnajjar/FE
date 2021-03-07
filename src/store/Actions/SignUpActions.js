import { SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../Types';
import { signUpService } from '../Services';

export const signUpForBothAdminAndCustomer = body => dispatch => {
  dispatch({
    type: SIGN_UP
  });
  signUpService(body)
    .then(res => {
      dispatch({
        type: SIGN_UP_SUCCESS,
        roles: res.roles,
        payload: res
      });
    })
    .catch(e => {
      dispatch({
        type: SIGN_UP_FAILURE,
        payload: {
          error: e
        }
      });
    });
};
