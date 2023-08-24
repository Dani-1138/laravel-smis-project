// saga.js

import { put, takeEvery, call } from 'redux-saga/effects';
import {
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
} from '../actions/chooseDepartmentAction';

const baseUrl = 'http://localhost:8000/api'; // Replace with your backend URL

// API service function to update student department
export const updateStudentDepartment = async (id, newDepartment) => {
  const response = await fetch(`${baseUrl}/students/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ department: newDepartment }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update department');
  }
  // You can return the response data if needed.
  // const data = await response.json();
  // return data;
};


// Saga function to handle the update department action
function* updateDepartmentSaga(action) {
  try {
    const { studentId, newDepartment } = action.payload;
    // Call the API to update the department in the database
    yield call(updateStudentDepartment, studentId, newDepartment);
    yield put({ type: UPDATE_DEPARTMENT_SUCCESS, payload: { studentId, newDepartment } });
  } catch (error) {
    yield put({ type: UPDATE_DEPARTMENT_FAILURE, error });
  }
}

// Saga watcher function
export default function* ChooseDepartmentSaga() {
  yield takeEvery(UPDATE_DEPARTMENT_REQUEST, updateDepartmentSaga);
}

