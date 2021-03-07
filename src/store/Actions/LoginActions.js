import {
  GET_LOGGEDIN,
  GET_LOGGEDIN_SUCCESS,
  GET_LOGGEDIN_FAILURE
} from '../Types';
import { loginAdminUser, logoutAdmin, loginAsCustomer } from '../Services';
import history from '../../Config/history';
export const getLoggedInActionAdmin = body => dispatch => {
  dispatch({
    type: GET_LOGGEDIN
  });
  loginAdminUser(body)
    .then(res => {
      dispatch({
        type: GET_LOGGEDIN_SUCCESS,
        payload: res
      });
      history.push('/app/complaint-history');
      history.go();
    })

    .catch(e => {
      dispatch({
        type: GET_LOGGEDIN_FAILURE,
        payload: {
          error: e
        }
      });
      logoutAdmin();
    });
};

export const getLoggedInActionCustomer = body => dispatch => {
  dispatch({
    type: GET_LOGGEDIN
  });
  loginAsCustomer(body)
    .then(res => {
      dispatch({
        type: GET_LOGGEDIN_SUCCESS,
        payload: res
      });
      history.push('/app/add-complaint');
      history.go();
    })
    .catch(e => {
      dispatch({
        type: GET_LOGGEDIN_FAILURE,
        payload: {
          error: e
        }
      });
      logoutAdmin();
    });
};
