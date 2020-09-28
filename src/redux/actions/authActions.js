import {
  MAKE_LOG_IN,
  MAKE_LOG_OUT,
} from '../actions/types';

// auth actions
export const make_log_in = (name, user_id, token) => {
  return {
    type: MAKE_LOG_IN,
    payload: {
      name: name,
      user_id: user_id,
      token: token,
    },
  };
};

export const make_log_out = (status) => {
  return {
    type: MAKE_LOG_OUT,
    payload: {
      status: status,
    },
  };
};
