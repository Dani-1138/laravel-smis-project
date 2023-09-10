// Action Types
export const ADD_DEPARTMENT_REQUEST = 'ADD_DEPARTMENT_REQUEST';
export const ADD_DEPARTMENT_SUCCESS = 'ADD_DEPARTMENT_SUCCESS';
export const ADD_DEPARTMENT_FAILURE = 'ADD_DEPARTMENT_FAILURE';

export const FETCH_DEPARTMENTS_REQUEST = 'FETCH_DEPARTMENTS_REQUEST';
export const FETCH_DEPARTMENTS_SUCCESS = 'FETCH_DEPARTMENTS_SUCCESS';
export const FETCH_DEPARTMENTS_FAILURE = 'FETCH_DEPARTMENTS_FAILURE';

export const FETCH_DEPARTMENT_REQUEST = 'FETCH_DEPARTMENT_REQUEST';
export const FETCH_DEPARTMENT_SUCCESS = 'FETCH_DEPARTMENT_SUCCESS';
export const FETCH_DEPARTMENT_FAILURE = 'FETCH_DEPARTMENT_FAILURE';

export const UPDATE_DEPARTMENT_REQUEST = 'UPDATE_DEPARTMENT_REQUEST';
export const UPDATE_DEPARTMENT_SUCCESS = 'UPDATE_DEPARTMENT_SUCCESS';
export const UPDATE_DEPARTMENT_FAILURE = 'UPDATE_STUDENT_FAILURE';

export const DELETE_DEPARTMENT_REQUEST = 'DELETE_DEPARTMENT_REQUEST';
export const DELETE_DEPARTMENT_SUCCESS = 'DELETE_DEPARTMENT_SUCCESS';
export const DELETE_DEPARTMENT_FAILURE = 'DELETE_DEPARTMENT_FAILURE';


// Action Creators
export const addDepartmentRequest = (departmentData) => ({
  type: ADD_DEPARTMENT_REQUEST,
  payload: departmentData,
});

export const addDepartmentSuccess = (department) => ({
  type: ADD_DEPARTMENT_SUCCESS,
  payload: department,
});

export const addDepartmentFailure = (error) => ({
  type: ADD_DEPARTMENT_FAILURE,
  payload: error,
});




// Action Creators
export const fetchDepartmentsRequest = () => ({
  type: FETCH_DEPARTMENTS_REQUEST,
});

export const fetchDepartmentsSuccess = (department) => ({
  type: FETCH_DEPARTMENTS_SUCCESS,
  payload: department,
});

export const fetchDepartmentsFailure = (error) => ({
  type: FETCH_DEPARTMENT_FAILURE,
  payload: error,
});

export const fetchDepartmentRequest = (id) => ({
  type: FETCH_DEPARTMENT_REQUEST,
  payload: id
});

export const fetchDepartmentSuccess = (department) => ({
  type: FETCH_DEPARTMENT_SUCCESS,
  payload: department,
});

export const fetchDepartmentFailure = (error) => ({
  type: FETCH_DEPARTMENTS_FAILURE,
  payload: error,
});

export const updateDepartmentRequest = (departmentId, data) => ({
  type: UPDATE_DEPARTMENT_REQUEST,
  payload: { departmentId, data },
});

export const updateDepartmentSuccess = (updatedDepartment) => ({
  type: UPDATE_DEPARTMENT_SUCCESS,
  payload: updatedDepartment,
});

export const updateDepartmentFailure = (error) => ({
  type: UPDATE_DEPARTMENT_FAILURE,
  payload: error,
});

export const deleteDepartmentRequest = (id) => ({
  type: DELETE_DEPARTMENT_REQUEST,
  payload: id,
});

export const deleteDepartmentSuccess = (id) => ({
  type: DELETE_DEPARTMENT_SUCCESS,
  payload: id,
});

export const deleteDepartmentFailure = (error) => ({
  type: DELETE_DEPARTMENT_FAILURE,
  payload: error,
});