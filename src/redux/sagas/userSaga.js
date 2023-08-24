import { put, takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/userAction';
import axios from 'axios';


// Replace 'YOUR_LARAVEL_API_ENDPOINT' with your actual Laravel API endpoint
const API_BASE_URL = 'http://localhost:8000/api';


// Add student
function* addUserSaga(action) {
    try {
      const response = yield axios.post(`${API_BASE_URL}/addUser`, action.payload);
      yield put(actionTypes.addUserSuccess(response.data));
    } catch (error) {
      yield put(actionTypes.addUserFailure(error.message));
    }
  }

// Fetch students
function* fetchUsersSaga() {
  try {
    const response = yield axios.get(`${API_BASE_URL}/getuser`);
    yield put(actionTypes.fetchUsersSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    yield put(actionTypes.fetchUsersFailure(error.message));
  }
}

// Update student
function* updateUserSaga(action) {
  try {
    const { userId, data } = action.payload;
    const response = yield axios.put(`${API_BASE_URL}/updateuser/${userId}`, data);
    yield put(actionTypes.updateUserSuccess(response.data));
  } catch (error) {
    yield put(actionTypes.updateUserFailure(error.message));
  }
}

// Delete student
function* deleteUserSaga(action) {
  try {
    const userId = action.payload;
    yield axios.delete(`${API_BASE_URL}/deleteuser/${userId}`);
    yield put(actionTypes.deleteUserSuccess(userId));
  } catch (error) {
    yield put(actionTypes.deleteUserFailure(error.message));
  }
}

// Watcher Saga
function* userSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_USERS_REQUEST, fetchUsersSaga),
    takeLatest(actionTypes.UPDATE_USER_REQUEST, updateUserSaga),
    takeLatest(actionTypes.DELETE_USER_REQUEST, deleteUserSaga),
    yield takeLatest(actionTypes.ADD_USER_REQUEST, addUserSaga),

  ]);
}

export default userSaga;