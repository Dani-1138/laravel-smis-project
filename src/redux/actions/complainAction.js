// Action Types
export const ADD_COMPLAIN_REQUEST = 'ADD_COMPLAIN_REQUEST';
export const ADD_COMPLAIN_SUCCESS = 'ADD_COMPLAIN_SUCCESS';
export const ADD_COMPLAIN_FAILURE = 'ADD_COMPLAIN_FAILURE';

export const FETCH_COMPLAINS_REQUEST = 'FETCH_COMPLAINS_REQUEST';
export const FETCH_COMPLAINS_SUCCESS = 'FETCH_COMPLAINS_SUCCESS';
export const FETCH_COMPLAINS_FAILURE = 'FETCH_COMPLAINS_FAILURE';

export const UPDATE_COMPLAIN_REQUEST = 'UPDATE_COMPLAIN_REQUEST';
export const UPDATE_COMPLAIN_SUCCESS = 'UPDATE_COMPLAIN_SUCCESS';
export const UPDATE_COMPLAIN_FAILURE = 'UPDATE_COMPLAIN_FAILURE';

export const DELETE_COMPLAIN_REQUEST = 'DELETE_COMPLAIN_REQUEST';
export const DELETE_COMPLAIN_SUCCESS = 'DELETE_COMPLAIN_SUCCESS';
export const DELETE_COMPLAIN_FAILURE = 'DELETE_COMPLAIN_FAILURE';

export const FETCH_COMPLAIN_REQUEST = 'FETCH_STUDENT_REQUEST';
export const FETCH_COMPLAIN_SUCCESS = 'FETCH_STUDENT_SUCCESS';
export const FETCH_COMPLAIN_FAILURE = 'FETCH_STUDENT_FAILURE';

export const fetchComplainRequest = id => ({
  type: FETCH_COMPLAIN_REQUEST,
  payload: id,
});

export const fetchComplainSuccess = student => ({
  type: FETCH_COMPLAIN_SUCCESS,
  payload: student,
});

export const fetchComplainFailure = error => ({
  type: FETCH_COMPLAIN_FAILURE,
  payload: error,
});

// Action Creators
export const addComplainRequest = (complainData) => ({
  type: ADD_COMPLAIN_REQUEST,
  payload: complainData,
});

export const addComplainSuccess = (complain) => ({
  type: ADD_COMPLAIN_SUCCESS,
  payload: complain,
});

export const addComplainFailure = (error) => ({
  type: ADD_COMPLAIN_FAILURE,
  payload: error,
});




// Action Creators
export const fetchComplainsRequest = () => ({
  type: FETCH_COMPLAINS_REQUEST,
});

export const fetchComplainsSuccess = (complains) => ({
  type: FETCH_COMPLAINS_SUCCESS,
  payload: complains,
});

export const fetchComplainsFailure = (error) => ({
  type: FETCH_COMPLAINS_FAILURE,
  payload: error,
});

export const updateComplainRequest = (studentId, response) => ({
  type: UPDATE_COMPLAIN_REQUEST,
  payload: { studentId, response },
});

export const updateComplainSuccess = (updatedComplain) => ({
  type: UPDATE_COMPLAIN_SUCCESS,
  payload: updatedComplain,
});

export const updateComplainFailure = (error) => ({
  type: UPDATE_COMPLAIN_FAILURE,
  payload: error,
});

export const deleteComplainRequest = (studentId) => ({
  type: DELETE_COMPLAIN_REQUEST,
  payload: studentId,
});

export const deleteComplainSuccess = (studentId) => ({
  type: DELETE_COMPLAIN_SUCCESS,
  payload: studentId,
});

export const deleteComplainFailure = (error) => ({
  type: DELETE_COMPLAIN_FAILURE,
  payload: error,
});