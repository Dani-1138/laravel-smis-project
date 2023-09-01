import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import studentReducer from './reducers/studentReducer';
import departmentReducer from './reducers/departmentReducer';
import examReducer from './reducers/examReducer'
import rootSaga from './sagas/rootSaga';
import userReducer from './reducers/userReducer';
import roleReducer from './reducers/roleReducer';
import chooseDepartmentReducer from './reducers/chooseDepartmentReducer';
import complainReducer from './reducers/complainReducer';
import updateDepartmentReducer from './reducers/updateStudentDepartment';
import statusReducer from './reducers/statusReducer';
import notificationReducer from './reducers/notificationReducer';



const rootReducer = combineReducers({
  students: studentReducer,departments: departmentReducer,exams: examReducer, user: userReducer,role: roleReducer,chooseDept:chooseDepartmentReducer,complains:complainReducer, updateDepartmentReducer:updateDepartmentReducer,status:statusReducer,notification: notificationReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;