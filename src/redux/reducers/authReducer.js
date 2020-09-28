import {MAKE_LOG_IN, MAKE_LOG_OUT} from '../actions/types/';

// initial state
let initialState = {
  is_logged_in: false,
  jwt_token: '',
  user_id: '',
  user_name: '',
};

// auth reducer switch case
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_LOG_IN:
      state.is_logged_in = true;
      state.jwt_token = action.token;
      state.user_id = action.user_id;
      state.user_name = action.user_name;
      return Object.assign({}, state);

    case MAKE_LOG_OUT:
      state.is_logged_in = false;
      return Object.assign({}, state);

    default:
      return state;
  }
};

export default authReducer;
