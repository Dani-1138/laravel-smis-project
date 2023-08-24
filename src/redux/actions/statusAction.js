export const FETCH_STATUS_REQUEST = 'FETCH_STUDENT_REQUEST';
export const FETCH_STATUS_SUCCESS = 'FETCH_STUDENT_SUCCESS';
export const FETCH_STATUS_FAILURE = 'FETCH_STUDENT_FAILURE';
export const UPDATE_EXAM_STATUS_REQUEST = 'UPDATE_COC_REQUEST';
export const UPDATE_EXAM_STATUS_SUCCESS = 'UPDATE_COC_SUCCESS';
export const UPDATE_EXAM_STATUS_FAILURE = 'UPDATE_COC_FAILURE';

export const UPDATE_COMPLAIN_STATUS_REQUEST = 'UPDATE_COC_REQUEST';
export const UPDATE_COMPLAIN_STATUS_SUCCESS = 'UPDATE_COC_SUCCESS';
export const UPDATE_COMPLAIN_STATUS_FAILURE = 'UPDATE_COC_FAILURE';

export const UPDATE_DEPARTMENT_STATUS_REQUEST = 'UPDATE_COC_REQUEST';
export const UPDATE_DEPARTMENT_STATUS_SUCCESS = 'UPDATE_COC_SUCCESS';
export const UPDATE_DEPARTMENT_STATUS_FAILURE = 'UPDATE_COC_FAILURE';

export const fetchStatusRequest = () => ({
    type: FETCH_STATUS_REQUEST,
  });
  
  export const fetchStatusSuccess = status => ({
    type: FETCH_STATUS_SUCCESS,
    payload: status,
  });
  
  export const fetchStatusFailure = (error) => ({
    type: FETCH_STATUS_FAILURE,
    payload: error,
  });

  export const updateExamStatusRequest = (idd, data) => ({
    type: UPDATE_EXAM_STATUS_REQUEST,
    payload: { idd, data },
  });
  
  export const updateExamStatusSuccess = (updatedStudent) => ({
    type: UPDATE_EXAM_STATUS_SUCCESS,
    payload: updatedStudent,
  });
  

  export const updateComplainStatusRequest = (studentId, result) => ({
    type: UPDATE_EXAM_STATUS_REQUEST,
    payload: { studentId, result },
  });
  
  export const updateComplainStatusSuccess = (updatedStudent) => ({
    type: UPDATE_EXAM_STATUS_SUCCESS,
    payload: updatedStudent,
  });
  
  export const updateComplainStatusFailure = (error) => ({
    type: UPDATE_EXAM_STATUS_FAILURE,
    payload: error,
  });

  export const updateDepartmentStatusRequest = (studentId, result) => ({
    type: UPDATE_DEPARTMENT_STATUS_REQUEST,
    payload: { studentId, result },
  });
  
  export const updateDepartmentStatusSuccess = (updatedStudent) => ({
    type: UPDATE_DEPARTMENT_STATUS_SUCCESS,
    payload: updatedStudent,
  });
  
  export const updateDepartmentStatusFailure = (error) => ({
    type: UPDATE_DEPARTMENT_STATUS_FAILURE,
    payload: error,
  });