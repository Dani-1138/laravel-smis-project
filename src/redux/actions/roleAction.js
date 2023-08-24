// export const LOGIN_USER = 'LOGIN_USER';

// export const loginUser = (user_id, password) => ({
//   type: LOGIN_USER,
//   payload: { user_id, password },
// });

export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});