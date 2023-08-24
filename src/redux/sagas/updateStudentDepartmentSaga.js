// saga.js

import { put, takeEvery, call } from 'redux-saga/effects';
import {
  UPDATE_ASSIGN_REQUEST,
  UPDATE_ASSIGN_SUCCESS,
  UPDATE_ASSIGN_FAILURE,
} from '../actions/studentDeparatmentAction';

const baseUrl = 'http://localhost:8000/api'; // Replace with your backend URL

// API service function to update student department
export const updateDepartmentAssign = async (id, department) => {
  const response = await fetch(`${baseUrl}/update-department/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ department: department }),
    
  });
  console.log(response);
  if (!response.ok) {
    throw new Error('Failed to update department');
  }
  // You can return the response data if needed.
  // const data = await response.json();
  // return data;
};


// Saga function to handle the update department action
function* updateDepartmentAssignSaga(action) {
  try {
    const { studentId, department } = action.payload;

    console.log("Saga call");
    // Call the API to update the department in the database
    yield call(updateDepartmentAssign, studentId, department);
    yield put({ type: UPDATE_ASSIGN_SUCCESS, payload: { studentId, department } });
  } catch (error) {
    yield put({ type: UPDATE_ASSIGN_FAILURE, error });
  }
}

// Saga watcher function
export default function* UpdateDepartmentAssignSaga() {
  yield takeEvery(UPDATE_ASSIGN_REQUEST, updateDepartmentAssignSaga);
}

