// Action Types
export const ADD_EXAM_REQUEST = 'ADD_EXAM_REQUEST';
export const ADD_EXAM_SUCCESS = 'ADD_EXAM_SUCCESS';
export const ADD_EXAM_FAILURE = 'ADD_EXAM_FAILURE';

export const FETCH_EXAMS_REQUEST = 'FETCH_EXAMS_REQUEST';
export const FETCH_EXAMS_SUCCESS = 'FETCH_EXAMS_SUCCESS';
export const FETCH_EXAMS_FAILURE = 'FETCH_EXAMS_FAILURE';

export const UPDATE_EXAM_REQUEST = 'UPDATE_EXAM_REQUEST';
export const UPDATE_EXAM_SUCCESS = 'UPDATE_EXAM_SUCCESS';
export const UPDATE_EXAM_FAILURE = 'UPDATE_EXAM_FAILURE';

export const DELETE_EXAM_REQUEST = 'DELETE_EXAM_REQUEST';
export const DELETE_EXAM_SUCCESS = 'DELETE_EXAM_SUCCESS';
export const DELETE_EXAM_FAILURE = 'DELETE_EXAM_FAILURE';


// Action Creators
export const addExamRequest = (examData) => ({
  type: ADD_EXAM_REQUEST,
  payload: examData,
});

export const addExamSuccess = (exam) => ({
  type: ADD_EXAM_SUCCESS,
  payload: exam,
});

export const addExamFailure = (error) => ({
  type: ADD_EXAM_FAILURE,
  payload: error,
});




// Action Creators
export const fetchExamsRequest = () => ({
  type: FETCH_EXAMS_REQUEST,
});

export const fetchExamsSuccess = (exam) => ({
  type: FETCH_EXAMS_SUCCESS,
  payload: exam,
});

export const fetchExamsFailure = (error) => ({
  type: FETCH_EXAMS_FAILURE,
  payload: error,
});

export const updateExamRequest = (examId, data) => ({
  type: UPDATE_EXAM_REQUEST,
  payload: { examId, data },
});

export const updateExamSuccess = (updatedExam) => ({
  type: UPDATE_EXAM_SUCCESS,
  payload: updatedExam,
});

export const updateExamFailure = (error) => ({
  type: UPDATE_EXAM_FAILURE,
  payload: error,
});

export const deleteExamRequest = (id) => ({
  type: DELETE_EXAM_REQUEST,
  payload: id,
});

export const deleteExamSuccess = (id) => ({
  type: DELETE_EXAM_SUCCESS,
  payload: id,
});

export const deleteExamFailure = (error) => ({
  type: DELETE_EXAM_FAILURE,
  payload: error,
});