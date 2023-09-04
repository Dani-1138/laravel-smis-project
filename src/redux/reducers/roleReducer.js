// reducers.js
import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from '../actions/roleAction';

const initialState = {
  role: [],
  loading: false,
  error: null
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        role: action.payload,
      };
      case LOGIN_USER_SUCCESS:
        localStorage.setItem('userRole', JSON.stringify([action.payload]));
        return {
          ...state,
          role: action.payload,
          loading: false,
        };
        case LOGIN_USER_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
          case LOGIN_USER:
            return {
              ...state,
              loading: false,
              role: action.payload,
            };
    default:
      return state;
  }
};

export default roleReducer;