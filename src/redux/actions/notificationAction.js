export const ADD_NOTIFICATION_REQUEST = 'ADD_NOTIFICATION_REQUEST';
export const ADD_NOTIFICATION_SUCCESS = 'ADD_NOTIFICATION_SUCCESS';
export const ADD_NOTIFICATION_FAILURE = 'ADD_NOTIFICATION_FAILURE';

export const FETCH_NOTIFICATION_REQUEST = 'FETCH_NOTIFICATION_REQUEST';
export const FETCH_NOTIFICATION_SUCCESS = 'FETCH_NOTIFICATION_SUCCESS';
export const FETCH_NOTIFICATION_FAILURE = 'FETCH_NOTIFICATION_FAILURE';

export const fetchNotificationRequest = ()=> ({
    type: FETCH_NOTIFICATION_REQUEST,
  });
  
  export const fetchNotificationSuccess = notification => ({
    type: FETCH_NOTIFICATION_SUCCESS,
    payload: notification,
  });
  
  export const fetchNotificationFailure = error => ({
    type: FETCH_NOTIFICATION_FAILURE,
    payload: error,
  });
  
  
  // Action Creators
  export const addNotificationRequest = (notification) => ({
    type: ADD_NOTIFICATION_REQUEST,
    payload: notification,
  });
  
  export const addNotificationSuccess = (notification) => ({
    type: ADD_NOTIFICATION_SUCCESS,
    payload: notification,
  });
  
  export const addNotificationFailure = (error) => ({
    type: ADD_NOTIFICATION_FAILURE,
    payload: error,
  });