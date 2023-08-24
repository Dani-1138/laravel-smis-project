// Action Types
export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';

export const FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';

export const UPDATE_STUDENT_REQUEST = 'UPDATE_STUDENT_REQUEST';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const UPDATE_STUDENT_FAILURE = 'UPDATE_STUDENT_FAILURE';
export const UPDATE_COC_REQUEST = 'UPDATE_COC_REQUEST';
export const UPDATE_COC_SUCCESS = 'UPDATE_COC_SUCCESS';
export const UPDATE_COC_FAILURE = 'UPDATE_COC_FAILURE';

export const DELETE_STUDENT_REQUEST = 'DELETE_STUDENT_REQUEST';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE';


export const FETCH_STUDENT_REQUEST = 'FETCH_STUDENT_REQUEST';
export const FETCH_STUDENT_SUCCESS = 'FETCH_STUDENT_SUCCESS';
export const FETCH_STUDENT_FAILURE = 'FETCH_STUDENT_FAILURE';

export const fetchStudentRequest = id => ({
  type: FETCH_STUDENT_REQUEST,
  payload: id,
});

export const fetchStudentSuccess = student => ({
  type: FETCH_STUDENT_SUCCESS,
  payload: student,
});

export const fetchStudentFailure = error => ({
  type: FETCH_STUDENT_FAILURE,
  payload: error,
});

export const fetchStudent = id => {
  return dispatch => {
    dispatch(fetchStudentRequest(id));
    
  }}

// Action Creators
export const addStudentRequest = (studentData) => ({
  type: ADD_STUDENT_REQUEST,
  payload: studentData,
});

export const addStudentSuccess = (student) => ({
  type: ADD_STUDENT_SUCCESS,
  payload: student,
});

export const addStudentFailure = (error) => ({
  type: ADD_STUDENT_FAILURE,
  payload: error,
});




// Action Creators
export const fetchStudentsRequest = () => ({
  type: FETCH_STUDENTS_REQUEST,
});

export const fetchStudentsSuccess = (students) => ({
  type: FETCH_STUDENTS_SUCCESS,
  payload: students,
});

export const fetchStudentsFailure = (error) => ({
  type: FETCH_STUDENTS_FAILURE,
  payload: error,
});

export const updateStudentRequest = (idd, data) => ({
  type: UPDATE_STUDENT_REQUEST,
  payload: { idd, data },
});

export const updateStudentSuccess = (updatedStudent) => ({
  type: UPDATE_STUDENT_SUCCESS,
  payload: updatedStudent,
});

export const updateStudentFailure = (error) => ({
  type: UPDATE_STUDENT_FAILURE,
  payload: error,
});
export const updateCOCRequest = (studentId, result) => ({
  type: UPDATE_COC_REQUEST,
  payload: { studentId, result },
});

export const updateCOCSuccess = (updatedCOC) => ({
  type: UPDATE_COC_SUCCESS,
  payload: updatedCOC,
});

export const updateCOCFailure = (error) => ({
  type: UPDATE_COC_FAILURE,
  payload: error,
});

export const deleteStudentRequest = (studentId) => ({
  type: DELETE_STUDENT_REQUEST,
  payload: studentId,
});

export const deleteStudentSuccess = (studentId) => ({
  type: DELETE_STUDENT_SUCCESS,
  payload: studentId,
});

export const deleteStudentFailure = (error) => ({
  type: DELETE_STUDENT_FAILURE,
  payload: error,
});