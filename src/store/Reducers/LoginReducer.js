import {
  GET_LOGGEDIN,
  GET_LOGGEDIN_FAILURE,
  GET_LOGGEDIN_SUCCESS
} from '../Types';
const INITIAL_STATE = {
  data: {},
  isLoggedIn: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LOGGEDIN:
      return {
        ...state,
        loading: true
      };

    case GET_LOGGEDIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        data: action.payload
      };

    case GET_LOGGEDIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
