import { all } from 'redux-saga/effects';
import studentSaga from './studentSaga';
import departmentSaga from './departmentSaga';
import examSaga from './examSaga';
import userSaga from './userSaga';
import roleSaga from './roleSaga'
import ChooseDepartmentSaga from './chooseDepartmentSaga';
import complainSaga from './complainSaga';
import UpdateDepartmentSaga from './updateStudentDepartmentSaga';
import statusSaga from './statusSaga';
import notificationSaga from './notificationSaga';

function* rootSaga() {
  // Use the all effect to run multiple sagas concurrently
  yield all([
    studentSaga(),
    departmentSaga(),
    examSaga(),
    roleSaga(),
    userSaga(),
    ChooseDepartmentSaga(),
    complainSaga(),
    UpdateDepartmentSaga(),
    statusSaga(),
    notificationSaga()

    // Add more sagas here if needed
  ]);
}

export default rootSaga;