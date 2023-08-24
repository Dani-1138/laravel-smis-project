import * as actionTypes from '../actions/complainAction';

const initialState = {
  complains: [],
  loading: false,
  error: null,
};

const complainReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_COMPLAIN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case actionTypes.ADD_COMPLAIN_SUCCESS:
        return {
          ...state,
          complains: [...state.complains, action.payload],
          loading: false,
        };
      case actionTypes.ADD_COMPLAIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    case actionTypes.FETCH_COMPLAINS_REQUEST:
    case actionTypes.UPDATE_COMPLAIN_REQUEST:
    case actionTypes.DELETE_COMPLAIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_COMPLAINS_SUCCESS:
      return {
        ...state,
        complains: action.payload,
        loading: false,
      };
    case actionTypes.UPDATE_COMPLAIN_SUCCESS:
      const { studentId, response } = action.payload;
      console.log(response);
        return {
          ...state,
          complains: state.complains.map((complain) =>
            complain.student_id === studentId ? { ...complain, response: response } : complain
          ),
        };
    case actionTypes.DELETE_COMPLAIN_SUCCESS:
      const filteredComplains = state.complains.filter(
        (complain) => complain.id !== action.payload
      );
      return {
        ...state,
        students: filteredComplains,
        loading: false,
      };
    case actionTypes.FETCH_COMPLAINS_FAILURE:
    case actionTypes.UPDATE_COMPLAIN_FAILURE:
    case actionTypes.DELETE_COMPLAIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case actionTypes.FETCH_COMPLAIN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case actionTypes.FETCH_COMPLAIN_SUCCESS:
        return {
          ...state,
          loading: false,
          complains: action.payload,
        };
      case actionTypes.FETCH_COMPLAIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default complainReducer;
