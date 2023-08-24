import * as actionTypes from '../actions/examAction';

const initialState = {
  exams: [],
  loading: false,
  error: null,
};

const examReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_EXAM_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case actionTypes.ADD_EXAM_SUCCESS:
        return {
          ...state,
          exams: [...state.exams, action.payload],
          loading: false,
        };
      case actionTypes.ADD_EXAM_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    // case actionTypes.FETCH_EXAMS_REQUEST:
    // case actionTypes.UPDATE_EXAM_REQUEST:
    case actionTypes.DELETE_EXAM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_EXAMS_SUCCESS:
      return {
        ...state,
        exams: action.payload,
        loading: false,
      };
    case actionTypes.UPDATE_EXAM_SUCCESS:
      const updatedExam = state.exams.map((exam) =>
        exam.id === action.payload.id ? action.payload : exam
      );
      return {
        ...state,
        exams: updatedExam,
        loading: false,
      };
    case actionTypes.DELETE_EXAM_SUCCESS:
      const filteredExams = state.exams.filter(
        (exam) => exam.id !== action.payload
      );
      return {
        ...state,
        exams: filteredExams,
        loading: false,
      };
    case actionTypes.FETCH_EXAMS_FAILURE:
    case actionTypes.UPDATE_EXAM_FAILURE:
    case actionTypes.DELETE_EXAM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default examReducer;