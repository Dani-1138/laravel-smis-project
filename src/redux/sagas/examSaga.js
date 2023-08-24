import { put, takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/examAction';
import axios from 'axios';

// Replace 'YOUR_LARAVEL_API_ENDPOINT' with your actual Laravel API endpoint
const API_BASE_URL = 'http://localhost:8000/api';


// Add student
function* addExamSaga(action) {
    try {
      const response = yield axios.post(`${API_BASE_URL}/addExam`, action.payload);
      yield put(actionTypes.addExamSuccess(response.data));
    } catch (error) {
      yield put(actionTypes.addExamFailure(error.message));
    }
  }

// Fetch students
function* fetchExamsSaga() {
  try {
    const response = yield axios.get(`${API_BASE_URL}/getExam`);
    yield put(actionTypes.fetchExamsSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    yield put(actionTypes.fetchExamsFailure(error.message));
  }
}

// Update student
function* updateExamSaga(action) {
  try {
    const { examId, data } = action.payload;
    const response = yield axios.put(`${API_BASE_URL}/updateExam/${examId}`, data);
    yield put(actionTypes.updateExamSuccess(response.data));
  } catch (error) {
    yield put(actionTypes.updateExamFailure(error.message));
  }
}

// Delete student
function* deleteExamSaga(action) {
  try {
    const id = action.payload;
    yield axios.delete(`${API_BASE_URL}/deleteexam/${id}`);
    yield put(actionTypes.deleteExamSuccess(id));
  } catch (error) {
    yield put(actionTypes.deleteExamFailure(error.message));
  }
}

// Watcher Saga
function* examSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_EXAMS_REQUEST, fetchExamsSaga),
    takeLatest(actionTypes.UPDATE_EXAM_REQUEST, updateExamSaga),
    takeLatest(actionTypes.DELETE_EXAM_REQUEST, deleteExamSaga),
    yield takeLatest(actionTypes.ADD_EXAM_REQUEST, addExamSaga),

  ]);
}

export default examSaga;