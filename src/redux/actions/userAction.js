// Action Types
export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';


// Action Creators
export const addUserRequest = (userData) => ({
  type: ADD_USER_REQUEST,
  payload: userData,
});

export const addUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

export const addUserFailure = (error) => ({
  type: ADD_USER_FAILURE,
  payload: error,
});




// Action Creators
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const updateUserRequest = (userId, data) => ({
  type: UPDATE_USER_REQUEST,
  payload: { userId, data },
});

export const updateUserSuccess = (updatedUser) => ({
  type: UPDATE_USER_SUCCESS,
  payload: updatedUser,
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});

export const deleteUserRequest = (userId) => ({
  type: DELETE_USER_REQUEST,
  payload: userId,
});

export const deleteUserSuccess = (userId) => ({
  type: DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: error,
});