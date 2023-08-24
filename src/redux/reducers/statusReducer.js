import * as actionTypes from '../actions/statusAction';

const initialState = {
  status: [],
  loading: false,
  error: null,
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {

      case actionTypes.FETCH_STATUS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case actionTypes.FETCH_STATUS_SUCCESS:
        return {
          ...state,
          loading: false,
          status: action.payload,
        };
      case actionTypes.FETCH_STATUS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
     
        case actionTypes.UPDATE_EXAM_STATUS_REQUEST:
        case actionTypes.UPDATE_COMPLAIN_STATUS_REQUEST:
        case actionTypes.UPDATE_DEPARTMENT_STATUS_REQUEST:
        case actionTypes.UPDATE_EXAM_STATUS_SUCCESS:
            const { idd, data } = action.payload;
                return {
                ...state,
                status: state.status.map((status) =>
                    status.id === idd ? { ...status, status: data } : status
                ),
                };
        case actionTypes.UPDATE_COMPLAIN_STATUS_SUCCESS:
            const { studentId, result } = action.payload;
                return {
                ...state,
                status: state.status.map((status) =>
                    status.id === studentId ? { ...status, status: result } : status
                ),
                };
                case actionTypes.UPDATE_DEPARTMENT_STATUS_SUCCESS:
            const { id, stat } = action.payload;
                return {
                ...state,
                status: state.status.map((status) =>
                    status.id === id ? { ...status, status: stat } : status
                ),
                };
    
        case actionTypes.UPDATE_EXAM_STATUS_FAILURE:
        case actionTypes.UPDATE_COMPLAIN_STATUS_FAILURE:
         case actionTypes.UPDATE_DEPARTMENT_STATUS_FAILURE:
    default:
      return state;
  }
};

export default statusReducer;
