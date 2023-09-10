import { put, takeLatest, all, call } from 'redux-saga/effects';
import * as actionTypes from '../actions/statusAction';
import axios from 'axios';
// import { UPDATE_COMPLAIN_SUCCESS,UPDATE_COMPLAIN_FAILURE } from '../actions/studentActions';

// Replace 'YOUR_LARAVEL_API_ENDPOINT' with your actual Laravel API endpoint
const API_BASE_URL = 'http://localhost:8000/api';


// Fetch students
function* fetchStatusSaga() {
  try {
    const response = yield axios.get(`${API_BASE_URL}/getstatus`);
    console.log(response)
    yield put(actionTypes.fetchStatusSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    yield put(actionTypes.fetchStatusFailure(error.message));
  }
}


function* updateExamStatusSaga(action) {
  try {
    const { idd, data } = action.payload;
    console.log(data);
    console.log(data);
    console.log(data);
    yield call(updateExamStatus, idd, data);
    yield put({ type: actionTypes.UPDATE_EXAM_STATUS_SUCCESS, payload: { idd, data } });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_EXAM_STATUS_FAILURE, error });
  }
}
export const updateExamStatus = async (idd, data) => {
  console.log(idd,data)
    const results = await fetch(`${API_BASE_URL}/update-exam-status/${idd}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: data }),
    });
    
    if (!results.ok) {
      throw new Error('Failed to update exam status');
    }
    // You can return the response data if needed.
    // const data = await response.json();
    // return data;
  };
  
function* updateComplainStatusSaga(action) {
    try {
      const { studentId, result } = action.payload;
      yield call(updateComplainStatus, studentId, result);
      yield put({ type: actionTypes.UPDATE_COMPLAIN_STATUS_SUCCESS, payload: { studentId, result } });
    } catch (error) {
      yield put({ type: actionTypes.UPDATE_COMPLAIN_STATUS_FAILURE, error });
    }
  }
  export const updateComplainStatus = async (idd, data) => {
      const results = await fetch(`${API_BASE_URL}/update-complain-status/${idd}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: data }),
      });
      
      if (!results.ok) {
        throw new Error('Failed to update exam status');
      }
      // You can return the response data if needed.
      // const data = await response.json();
      // return data;
    };
    function* updateDepartmentStatusSaga(action) {
        try {
          const { id, stat } = action.payload;
          yield call(updateDepartmentStatus, id, stat);
          yield put({ type: actionTypes.UPDATE_DEPARTMENT_STATUS_SUCCESS, payload: { id, stat } });
        } catch (error) {
          yield put({ type: actionTypes.UPDATE_DEPARTMENT_STATUS_FAILURE, error });
        }
      }
      export const updateDepartmentStatus = async (idd, data) => {
          const results = await fetch(`${API_BASE_URL}/update-department-status/${idd}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: data }),
          });
          
          if (!results.ok) {
            throw new Error('Failed to update exam status');
          }
          // You can return the response data if needed.
          // const data = await response.json();
          // return data;
        };
// Watcher Saga
function* statusSaga() {
  yield all([
    yield  takeLatest(actionTypes.FETCH_STATUS_REQUEST, fetchStatusSaga),
    yield takeLatest(actionTypes.UPDATE_EXAM_STATUS_REQUEST, updateExamStatusSaga),
    yield takeLatest(actionTypes.UPDATE_COMPLAIN_STATUS_REQUEST, updateComplainStatusSaga),
    yield takeLatest(actionTypes.UPDATE_DEPARTMENT_STATUS_REQUEST, updateDepartmentStatusSaga),
  ]);
}

export default statusSaga;