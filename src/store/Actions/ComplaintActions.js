import {
  GET_COMPLAINT,
  GET_COMPLAINT_FAILURE,
  GET_COMPLAINT_SUCCESS,
  CREATE_COMPLAINT,
  CREATE_COMPLAINT_FAILURE,
  CREATE_COMPLAINT_SUCCESS,
  MODIFY_COMPLAINT,
  MODIFY_COMPLAINT_FAILURE,
  MODIFY_COMPLAINT_SUCCESS
} from '../Types';
import {
  getAllComplaintService,
  modifyComplaint,
  createComplaintService
} from '../Services';

export const getAllComplaintAction = () => dispatch => {
  dispatch({
    type: GET_COMPLAINT
  });
  getAllComplaintService()
    .then(res => {
      dispatch({
        type: GET_COMPLAINT_SUCCESS,
        payload: res
      });
    })
    .catch(e => {
      dispatch({
        type: GET_COMPLAINT_FAILURE,
        payload: {
          error: e
        }
      });
    });
};

export const createComplaintAction = body => dispatch => {
  dispatch({
    type: CREATE_COMPLAINT
  });
  createComplaintService(body)
    .then(res => {
      dispatch({
        type: CREATE_COMPLAINT_SUCCESS,
        payload: res
      });
    })
    .catch(e => {
      dispatch({
        type: CREATE_COMPLAINT_FAILURE,
        payload: {
          error: e
        }
      });
    });
};

export const modifyComplaintAction = (body, callback = {}) => dispatch => {
  dispatch({
    type: MODIFY_COMPLAINT
  });
  modifyComplaint(body)
    .then(res => {
      dispatch({
        type: MODIFY_COMPLAINT_SUCCESS,
        payload: res
      });
      callback();
    })
    .catch(e => {
      dispatch({
        type: MODIFY_COMPLAINT_FAILURE,
        payload: {
          error: e
        }
      });
    });
};
