import { SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../Types';
const INITIAL_STATE = {
  data: {},
  error: '',
  signedUpSuccess: false,
  roles: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        loading: true
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        signedUpSuccess: true,
        roles: action.payload?.role,
        data: action.payload
      };

    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        signedUpSuccess: false,
        error: action.payload
      };

    default:
      return state;
  }
};
