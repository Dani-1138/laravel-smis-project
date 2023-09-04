import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_USER, LOGIN_USER_REQUEST, loginUser, loginUserFailure, loginUserSuccess } from '../actions/roleAction';

// Replace 'YOUR_BACKEND_API_URL' with the actual API endpoint for user login
const loginApi = (user_id, password) => {
  return axios.get('http://localhost:8000/api/login', { user_id, password });
};

// function* handleLogin(action) {
//   const { user_id, password} = action.payload
//   console.log(user_id, password)
//   console.log(user_id, password)
//   console.log(user_id, password)
//   try {
//     // const response = yield axios.get('http://localhost:8000/api/login', { user_id, password});
//     const response = yield axios.get('http://localhost:8000/api/login', { user_id, password });
//     console.log(response);
//     yield put(loginUserSuccess(response.data));
//   } catch (error) {
//     yield put(loginUserFailure(error.message));
//   }

// }

function* handleLogin(action) {
  try {
    // Replace with your Laravel backend API URL and endpoint
    const response = yield call(axios.post, 'http://localhost:8000/api/login', {
      user_id: action.payload.user_id,
      password: action.payload.password,
    });
    console.log(response)
    // Dispatch success action with the authenticated user data
    // localStorage.setItem('userRole', JSON.stringify([response.data]));
    yield put(loginUserSuccess(response.data));
  } catch (error) {
    // Dispatch failure action with the error message
    yield put(loginUserFailure(error.message));
  }
}
function* roleSaga() {
  yield takeLatest(LOGIN_USER_REQUEST, handleLogin);
}

export default roleSaga;