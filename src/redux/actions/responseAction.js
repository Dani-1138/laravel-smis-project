export const UPDATE_COMPLAIN_REQUEST = 'UPDATE_COMPLAIN_REQUEST';
export const UPDATE_COMPLAIN_SUCCESS = 'UPDATE_COMPLAIN_SUCCESS';
export const UPDATE_COMPLAIN_FAILURE = 'UPDATE_COMPLAIN_FAILURE';

export const updateComplain = (studentId, response) => ({
    type: UPDATE_COMPLAIN_REQUEST,
    payload: { studentId, response },
  });