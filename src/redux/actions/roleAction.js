export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGIN_USER = 'LOGIN_USER';

export const loginUserRequest = (user_id, password) => ({
  type: LOGIN_USER_REQUEST,
  payload: { user_id, password},
});
export const loginUserSuccess = data => ({
  type: LOGIN_USER_SUCCESS,
  payload: data,
});
export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});