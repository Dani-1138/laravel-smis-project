
import {
    UPDATE_ASSIGN_SUCCESS,
  } from '../actions/studentDeparatmentAction';
  
  const initialState = {
    students: [],
  };
  
  const updateDepartmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_ASSIGN_SUCCESS:
        const { studentId, department } = action.payload;
        return {
          ...state,
          students: state.students.map((student) =>
            student.student_id === studentId ? { ...student, department: department } : student
          ),
        };
      default:
        return state;
    }
  };
  
  export default updateDepartmentReducer;