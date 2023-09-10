import * as actionTypes from '../actions/studentActions';

const initialState = {
  students: [],
  student: [],
  loading: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_STUDENT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case actionTypes.ADD_STUDENT_SUCCESS:
        return {
          ...state,
          students: [...state.students, action.payload],
          loading: false,
        };
      case actionTypes.ADD_STUDENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    case actionTypes.FETCH_STUDENTS_REQUEST:
    case actionTypes.UPDATE_STUDENT_REQUEST:
    case actionTypes.DELETE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
        loading: false,
      };
    case actionTypes.UPDATE_STUDENT_SUCCESS:
      const updatedStudents = state.students.map((student) =>
        student.student_id === action.payload.idd ? action.payload.data : student
      );
      return {
        ...state,
        students: updatedStudents,
        loading: false,
      };
    case actionTypes.DELETE_STUDENT_SUCCESS:
      const filteredStudents = state.students.filter(
        (student) => student.id !== action.payload
      );
      return {
        ...state,
        students: filteredStudents,
        loading: false,
      };
    case actionTypes.FETCH_STUDENTS_FAILURE:
    case actionTypes.UPDATE_STUDENT_FAILURE:
    case actionTypes.DELETE_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case actionTypes.FETCH_STUDENT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case actionTypes.FETCH_STUDENT_SUCCESS:
        return {
          ...state,
          loading: false,
          student: action.payload,
        };
      case actionTypes.FETCH_STUDENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case actionTypes.UPDATE_COC_SUCCESS:
      const { studentId, result } = action.payload;
        return {
          ...state,
          students: state.students.map((student) =>
            student.student_id === studentId ? { ...student, result: result } : student
          ),
        };

    default:
      return state;
  }
};

export default studentReducer;
