// reducers.js
import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from '../actions/roleAction';

const initialState = {
  role: [],
  loading: false,
  error: null,
  isAuthenticated: false
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        // role: action.payload,
      };
      case LOGIN_USER_SUCCESS:
        localStorage.setItem('userRole', JSON.stringify([action.payload]));
        console.log(action.payload)
        console.log(JSON.parse(localStorage.getItem('userRole')))
        return {
          ...state,
          role: JSON.parse(localStorage.getItem('userRole')),
          loading: false,
          isAuthenticated: true
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
              isAuthenticated: true
            };
    default:
      return state;
  }
};

export default roleReducer;