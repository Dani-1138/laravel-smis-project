import * as actionTypes from '../actions/notificationAction';

const initialState = {
  notification: [],
  loading: false,
  error: null,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_NOTIFICATION_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case actionTypes.ADD_NOTIFICATION_SUCCESS:
        return {
          ...state,
          notification: [...state.notification, action.payload],
          loading: false,
        };
      case actionTypes.ADD_NOTIFICATION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    case actionTypes.FETCH_NOTIFICATION_REQUEST:
        return {
            ...state,
            loading: true,
            error: null,
          };
    case actionTypes.FETCH_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notification: action.payload,
        loading: false,
      };
    
    // case actionTypes.DELETE_COMPLAIN_SUCCESS:
    //   const filteredComplains = state.complains.filter(
    //     (complain) => complain.id !== action.payload
    //   );
    //   return {
    //     ...state,
    //     students: filteredComplains,
    //     loading: false,
    //   };
    case actionTypes.FETCH_NOTIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case actionTypes.DELETE_NOTIFICATION_SUCCESS:
        const filteredStudents = state.notification.filter(
          (student) => student.id !== action.payload
        );
        return {
          ...state,
          students: filteredStudents,
          loading: false,
        };
        case actionTypes.DELETE_NOTIFICATION_REQUEST:
          return {
            ...state,
            loading: true,
            error: null,
          };
          case actionTypes.DELETE_NOTIFICATION_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
      
    default:
      return state;
  }
};

export default notificationReducer;
