import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NEW_PASSWORD_CHANGED,  
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER,
  PASSWORD_DIFF,
  LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  newPassword:'',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case NEW_PASSWORD_CHANGED:
      return { ...state, newPassword: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case SIGNUP_USER:
      return { ...state, loading: true, error: '' };
    case SIGNUP_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case SIGNUP_USER_FAIL:
      return { ...state, error: 'Please use a longer password.', password: '', newPassword: '', loading: false };
    case PASSWORD_DIFF:
      return { ...state, error: 'Password is different. Re-enter password.', password: '', newPassword: '', loading: false };
    case LOGOUT_USER:
    return { ...state, ...INITIAL_STATE, user: action.payload };
    default:
      return state;
  }
};
