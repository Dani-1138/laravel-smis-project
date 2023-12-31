export const UPDATE_DEPARTMENT_REQUEST = 'UPDATE_DEPARTMENT_REQUEST';
export const UPDATE_DEPARTMENT_SUCCESS = 'UPDATE_DEPARTMENT_SUCCESS';
export const UPDATE_DEPARTMENT_FAILURE = 'UPDATE_DEPARTMENT_FAILURE';

export const updateDepartment = (studentId, newDepartment) => ({
    type: UPDATE_DEPARTMENT_REQUEST,
    payload: { studentId, newDepartment },
  });