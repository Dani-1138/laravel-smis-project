// import { call, put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';
// import { LOGIN_USER, loginUser } from '../actions/roleAction';

// // Replace 'YOUR_BACKEND_API_URL' with the actual API endpoint for user login
// const loginApi = (user_id, password) => {
//   return axios.get('http://localhost:8000/api/login', { user_id, password });
// };

// function* handleLogin(action) {
//   try {
//     const { user_id, password } = action.payload;
//     const response = yield call(loginApi, user_id, password);
//     console.log(response)
//     // Assuming the response data has the user's role, extract it and update the Redux state
//     const role = response.data.role; // Replace 'role' with the actual property containing the role

//     yield put(loginUser(role));
//   } catch (error) {
//     // Handle login error
//     console.error('Login error:', error);
//   }
// }

// function* roleSaga() {
//   yield takeLatest(LOGIN_USER, handleLogin);
// }

// export default roleSaga;