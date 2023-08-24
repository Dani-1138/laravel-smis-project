// reducers.js
import { LOGIN_USER } from '../actions/roleAction';

const initialState = {
  role: null,
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default roleReducer;