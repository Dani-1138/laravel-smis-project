import { put, takeLatest, all, call } from 'redux-saga/effects';
import * as actionTypes from '../actions/departmentActions';
import axios from 'axios';

// Replace 'YOUR_LARAVEL_API_ENDPOINT' with your actual Laravel API endpoint
const API_BASE_URL = 'http://localhost:8000/api';


// Add student
function* addDepartmentSaga(action) {
    try {
      const response = yield axios.post(`${API_BASE_URL}/addDepartment`, action.payload);
      yield put(actionTypes.addDepartmentSuccess(response.data));
    } catch (error) {
      yield put(actionTypes.addDepartmentFailure(error.message));
    }
  }

// Fetch students
function* fetchDepartmentsSaga() {
  try {
    const response = yield axios.get(`${API_BASE_URL}/getdepartment`);
    yield put(actionTypes.fetchDepartmentsSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    yield put(actionTypes.fetchDepartmentsFailure(error.message));
  }
}
function* fetchDepartmentSaga(action) {
  try {
    const response = yield call(axios.get, `${API_BASE_URL}/singledept/${action.payload}`);
    console.log(response.data);
    if (response.status === 200) {
      yield put(actionTypes.fetchDepartmentSuccess(response.data));
    } else {
      yield put(actionTypes.fetchDepartmentFailure('Failed to fetch department'));
    }
  } catch (error) {
    yield put(actionTypes.fetchDepartmentFailure('An error occurred while fetching department'));
  }
}

// Update student
function* updateDepartmentSaga(action) {
  try {
    const { departmentId, data } = action.payload;
    const response = yield axios.put(`${API_BASE_URL}/updatedepartment/${departmentId}`, data);
    console.log(response);
    yield put(actionTypes.updateDepartmentSuccess(response.data));
  } catch (error) {
    yield put(actionTypes.updateDepartmentFailure(error.message));
  }
}

// Delete student
function* deleteDepartmentSaga(action) {
  try {
    const id = action.payload;
    yield axios.delete(`${API_BASE_URL}/deletedepartment/${id}`);
    yield put(actionTypes.deleteDepartmentSuccess(id));
  } catch (error) {
    yield put(actionTypes.deleteDepartmentFailure(error.message));
  }
}

// Watcher Saga
function* departmentSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_DEPARTMENTS_REQUEST, fetchDepartmentsSaga),
    takeLatest(actionTypes.FETCH_DEPARTMENT_REQUEST, fetchDepartmentSaga),
    takeLatest(actionTypes.UPDATE_DEPARTMENT_REQUEST, updateDepartmentSaga),
    takeLatest(actionTypes.DELETE_DEPARTMENT_REQUEST, deleteDepartmentSaga),
    yield takeLatest(actionTypes.ADD_DEPARTMENT_REQUEST, addDepartmentSaga),

  ]);
}

export default departmentSaga;