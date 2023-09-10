import * as actionTypes from '../actions/departmentActions';

const initialState = {
  departments: [],
  department: [],
  loading: false,
  error: null,
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_DEPARTMENT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case actionTypes.ADD_DEPARTMENT_SUCCESS:
        return {
          ...state,
          departments: [...state.departments, action.payload],
          loading: false,
        };
      case actionTypes.ADD_DEPARTMENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    case actionTypes.FETCH_DEPARTMENTS_REQUEST:
    case actionTypes.UPDATE_DEPARTMENT_REQUEST:
    case actionTypes.DELETE_DEPARTMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        departments: action.payload,
        loading: false,
      };
    case actionTypes.UPDATE_DEPARTMENT_SUCCESS:
      const updatedDepartments = state.departments.map((department) =>
        department.id === action.payload.id ? action.payload : department
      );
      return {
        ...state,
        departments: updatedDepartments,
        loading: false,
      };
      
    case actionTypes.DELETE_DEPARTMENT_SUCCESS:
      const filteredDepartments = state.departments.filter(
        (department) => department.id !== action.payload
      );
      return {
        ...state,
        students: filteredDepartments,
        loading: false,
      };
    case actionTypes.FETCH_DEPARTMENTS_FAILURE:
    case actionTypes.UPDATE_DEPARTMENT_FAILURE:
    case actionTypes.DELETE_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case actionTypes.FETCH_DEPARTMENT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case actionTypes.FETCH_DEPARTMENT_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          loading: false,
          department: action.payload,
        };
      case actionTypes.FETCH_DEPARTMENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default departmentReducer;