import { put, takeLatest, all, call } from 'redux-saga/effects';
import * as actionTypes from '../actions/complainAction';
import axios from 'axios';
import { UPDATE_COMPLAIN_SUCCESS,UPDATE_COMPLAIN_FAILURE } from '../actions/complainAction';

// Replace 'YOUR_LARAVEL_API_ENDPOINT' with your actual Laravel API endpoint
const API_BASE_URL = 'http://localhost:8000/api';


// Add student
function* addComplainSaga(action) {
    try {
      const response = yield axios.post(`${API_BASE_URL}/addComplain`, action.payload);
      yield put(actionTypes.addComplainSuccess(response.data));
    } catch (error) {
      yield put(actionTypes.addComplainFailure(error.message));
    }
  }

// Fetch students
function* fetchComplainsSaga() {
  try {
    const response = yield axios.get(`${API_BASE_URL}/getcomplain`);
    yield put(actionTypes.fetchComplainsSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    yield put(actionTypes.fetchComplainsFailure(error.message));
  }
}

// Update student
// function* updateComplainSaga(action) {
//   try {
//     const { studentId, data } = action.payload;
//     const response = yield axios.put(`${API_BASE_URL}/complain/${studentId}`, data);
//     yield put(actionTypes.updateComplainSuccess(response.data));
//   } catch (error) {
//     yield put(actionTypes.updateComplainFailure(error.message));
//   }
// }

export const updateStudentDepartment = async (id, response) => {
  const responses = await fetch(`${API_BASE_URL}/updatecomplain/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ response: response }),
  });
  
  if (!responses.ok) {
    throw new Error('Failed to submit Complain');
  }
  // You can return the response data if needed.
  // const data = await response.json();
  // return data;
};


// Saga function to handle the update department action
function* updateComplainSaga(action) {
  try {
    const { id, response } = action.payload;
    console.log(response);
    console.log(response);
    // Call the API to update the department in the database
    yield call(updateStudentDepartment, id, response);
    yield put({ type: UPDATE_COMPLAIN_SUCCESS, payload: { id, response } });
  } catch (error) {
    yield put({ type: UPDATE_COMPLAIN_FAILURE, error });
  }
}


// Delete student
function* deleteComplainSaga(action) {
  try {
    const studentId = action.payload;
    yield axios.delete(`${API_BASE_URL}/deletecomplain/${studentId}`);
    yield put(actionTypes.deleteComplainSuccess(studentId));
  } catch (error) {
    yield put(actionTypes.deleteComplainFailure(error.message));
  }
}

function* fetchComplainSaga(action) {
  try {
    const response = yield call(axios.get, `${API_BASE_URL}/get-complain/${action.payload}`);

    if (response.status === 200) {
      yield put(actionTypes.fetchComplainSuccess(response.data));
    } else {
      yield put(actionTypes.fetchComplainFailure('Failed to fetch response'));
    }
  } catch (error) {
    yield put(actionTypes.fetchComplainFailure('An error occurred while fetching response'));
  }
}
// Watcher Saga
function* complainSaga() {
  yield all([
    yield takeLatest(actionTypes.FETCH_COMPLAINS_REQUEST, fetchComplainsSaga),
    takeLatest(actionTypes.FETCH_COMPLAIN_REQUEST, fetchComplainSaga),
    takeLatest(actionTypes.UPDATE_COMPLAIN_REQUEST, updateComplainSaga),
    takeLatest(actionTypes.DELETE_COMPLAIN_REQUEST, deleteComplainSaga),
    yield takeLatest(actionTypes.ADD_COMPLAIN_REQUEST, addComplainSaga),

  ]);
}

export default complainSaga;