import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_USER, LOGIN_USER_REQUEST, loginUser, loginUserFailure, loginUserSuccess } from '../actions/roleAction';
import { PASS_CHANGE_REQUEST, changeFailur, changeSuccess } from '../actions/changePass';

// Replace 'YOUR_BACKEND_API_URL' with the actual API endpoint for user login
const loginApi = (user_id, password) => {
  return axios.get('http://localhost:8000/api/login', { user_id, password });
};


function* handleChange(action) {
  try {
    // Replace with your Laravel backend API URL and endpoint
    const response = yield call(axios.post, 'http://localhost:8000/api/change', {
      user_id: action.payload.user_id,
      password: action.payload.password,
    });
    // Dispatch success action with the authenticated user data
    // localStorage.setItem('userRole', JSON.stringify([response.data]));
    yield put(changeSuccess(response.data));
  } catch (error) {
    // Dispatch failure action with the error message
    yield put(changeFailur(error.message));
  }
}
function* changeSaga() {
  yield takeLatest(PASS_CHANGE_REQUEST, handleChange);
}

export default changeSaga;