// studentReducer.js

import {
    UPDATE_DEPARTMENT_SUCCESS,
  } from '../actions/chooseDepartmentAction';
  
  const initialState = {
    students: [],
  };
  
  const chooseDepartmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_DEPARTMENT_SUCCESS:
        const { studentId, newDepartment } = action.payload;
        return {
          ...state,
          students: state.students.map((student) =>
            student.id === studentId ? { ...student, department: newDepartment } : student
          ),
        };
      default:
        return state;
    }
  };
  
  export default chooseDepartmentReducer;
  