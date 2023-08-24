import { put, takeLatest, all, call } from 'redux-saga/effects';
import * as actionTypes from '../actions/studentActions';
import axios from 'axios';
// import { UPDATE_COMPLAIN_SUCCESS,UPDATE_COMPLAIN_FAILURE } from '../actions/studentActions';

// Replace 'YOUR_LARAVEL_API_ENDPOINT' with your actual Laravel API endpoint
const API_BASE_URL = 'http://localhost:8000/api';


// Add student
function* addStudentSaga(action) {
    try {
      const response = yield axios.post(`${API_BASE_URL}/addStudent`, action.payload);
      yield put(actionTypes.addStudentSuccess(response.data));
    } catch (error) {
      yield put(actionTypes.addStudentFailure(error.message));
    }
  }

// Fetch students
function* fetchStudentsSaga() {
  try {
    const response = yield axios.get(`${API_BASE_URL}/getstudent`);
    yield put(actionTypes.fetchStudentsSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    yield put(actionTypes.fetchStudentsFailure(error.message));
  }
}

function* fetchStudentSaga(action) {
  try {
    const response = yield call(axios.get, `${API_BASE_URL}/get-student/${action.payload}`);

    if (response.status === 200) {
      yield put(actionTypes.fetchStudentSuccess(response.data));
    } else {
      yield put(actionTypes.fetchStudentFailure('Failed to fetch student'));
    }
  } catch (error) {
    yield put(actionTypes.fetchStudentFailure('An error occurred while fetching student'));
  }
}

// Update student
function* updateStudentSaga(action) {
  try {
    const { idd, data } = action.payload;
    const response = yield axios.put(`${API_BASE_URL}/updatestudent/${idd}`, data);
    yield put(actionTypes.updateStudentSuccess(response.data));
  } catch (error) {
    yield put(actionTypes.updateStudentFailure(error.message));
  }
}

// Delete student
function* deleteStudentSaga(action) {
  try {
    const studentId = action.payload;
    yield axios.delete(`${API_BASE_URL}/students/${studentId}`);
    yield put(actionTypes.deleteStudentSuccess(studentId));
  } catch (error) {
    yield put(actionTypes.deleteStudentFailure(error.message));
  }
}

export const updateStudentCOC = async (id, result) => {
  console.log(result)
  const results = await fetch(`${API_BASE_URL}/updateCOC/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ result: result }),
  });
  
  if (!results.ok) {
    throw new Error('Failed to submit COC');
  }
  // You can return the response data if needed.
  // const data = await response.json();
  // return data;
};

function* updateCOCSaga(action) {
  try {
    const { studentId, result } = action.payload;
    console.log(result);
    yield call(updateStudentCOC, studentId, result);
    yield put({ type: actionTypes.UPDATE_COC_SUCCESS, payload: { studentId, result } });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_COC_FAILURE, error });
  }
}

// Watcher Saga
function* studentSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_STUDENTS_REQUEST, fetchStudentsSaga),
    takeLatest(actionTypes.UPDATE_STUDENT_REQUEST, updateStudentSaga),
    takeLatest(actionTypes.DELETE_STUDENT_REQUEST, deleteStudentSaga),
    takeLatest(actionTypes.ADD_STUDENT_REQUEST, addStudentSaga),
   takeLatest(actionTypes.FETCH_STUDENT_REQUEST, fetchStudentSaga),
   takeLatest(actionTypes.UPDATE_COC_REQUEST, updateCOCSaga),

  ]);
}

export default studentSaga;