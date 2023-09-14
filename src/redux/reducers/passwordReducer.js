// reducers.js
import { PASS_CHANGE_FAILURE } from '../actions/changePass';
import {   PASS_CHANGE_REQUEST, PASS_CHANGE_SUCCESS } from '../actions/changePass';

const initialState = {
    isMatch: false,
  loading: false,
  error: null,
  
};

const passReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASS_CHANGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
      case PASS_CHANGE_SUCCESS:
        return {
          ...state,
          isMatch: action.payload,
          loading: false,
          isAuthenticated: true
        };
        case PASS_CHANGE_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };

    default:
      return state;
  }
};

export default passReducer;