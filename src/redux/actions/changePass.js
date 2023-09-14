export const PASS_CHANGE_REQUEST = 'PASS_CHANGE_REQUEST';
export const PASS_CHANGE_SUCCESS = 'PASS_CHANGE_SUCCESS';
export const PASS_CHANGE_FAILURE = 'PASS_CHANGE_FAILURE';


export const ChangeRequest = (user_id, password) => ({
  type: PASS_CHANGE_REQUEST,
  payload: { user_id, password},
});
export const changeSuccess = data => ({
  type: PASS_CHANGE_SUCCESS,
  payload: data,
});
export const changeFailur = error => ({
  type: PASS_CHANGE_FAILURE,
  payload: error,
});