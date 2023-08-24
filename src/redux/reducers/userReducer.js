import * as actionTypes from '../actions/userAction';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case actionTypes.ADD_USER_SUCCESS:
        return {
          ...state,
          users: [...state.users, action.payload],
          loading: false,
        };
      case actionTypes.ADD_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    case actionTypes.FETCH_USERS_REQUEST:
    case actionTypes.UPDATE_USER_REQUEST:
    case actionTypes.DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case actionTypes.UPDATE_USER_SUCCESS:
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      return {
        ...state,
        users: updatedUsers,
        loading: false,
      };
    case actionTypes.DELETE_USER_SUCCESS:
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filteredUsers,
        loading: false,
      };
    case actionTypes.FETCH_USERS_FAILURE:
    case actionTypes.UPDATE_USER_FAILURE:
    case actionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
