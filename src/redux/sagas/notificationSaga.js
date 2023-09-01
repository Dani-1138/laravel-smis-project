import { put, takeLatest, all, call } from 'redux-saga/effects';
import * as actionTypes from '../actions/notificationAction';
import axios from 'axios';
import { UPDATE_COMPLAIN_SUCCESS,UPDATE_COMPLAIN_FAILURE } from '../actions/notificationAction';

// Replace 'YOUR_LARAVEL_API_ENDPOINT' with your actual Laravel API endpoint
const API_BASE_URL = 'http://localhost:8000/api';


// Add student
function* addNotificationSaga(action) {
    try {
      const response = yield axios.post(`${API_BASE_URL}/createpost`, action.payload);
      yield put(actionTypes.addNotificationSuccess(response));
    } catch (error) {
      yield put(actionTypes.addNotificationFailure(error.message));
    }
  }

// Fetch students
function* fetchNotificationSaga() {
  try {
    const response = yield axios.get(`${API_BASE_URL}/get-notification`);
    yield put(actionTypes.fetchNotificationSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    yield put(actionTypes.fetchNotificationFailure(error.message));
  }
}

// Watcher Saga
function* notificationSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_NOTIFICATION_REQUEST, fetchNotificationSaga),
    yield takeLatest(actionTypes.ADD_NOTIFICATION_REQUEST, addNotificationSaga),

  ]);
}

export default notificationSaga;