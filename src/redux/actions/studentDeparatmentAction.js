export const UPDATE_ASSIGN_REQUEST = 'UPDATE_ASSIGN_REQUEST';
export const UPDATE_ASSIGN_SUCCESS = 'UPDATE_ASSIGN_SUCCESS';
export const UPDATE_ASSIGN_FAILURE = 'UPDATE_ASSIGN_FAILURE';

export const updateStudentDepartmentAssign = (studentId, department) => ({
    type: UPDATE_ASSIGN_REQUEST,
    payload: { studentId, department },
  });