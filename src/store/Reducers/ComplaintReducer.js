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
const INITIAL_STATE = {
  data: {},
  error: '',
  modified: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COMPLAINT:
      return {
        ...state,
        loading: true
      };

    case GET_COMPLAINT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case GET_COMPLAINT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case CREATE_COMPLAINT:
      return {
        ...state,
        loading: true
      };

    case CREATE_COMPLAINT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case CREATE_COMPLAINT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case MODIFY_COMPLAINT:
      return {
        ...state,
        loading: true
      };

    case MODIFY_COMPLAINT_SUCCESS:
      return {
        ...state,
        loading: false,
        modified: action.payload
      };

    case MODIFY_COMPLAINT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
