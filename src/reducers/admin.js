import * as ACTION from '@src/actions/admin/actionsType';

const INITIAL_STATE = {
  token: '',
};

function adminReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.LOG_IN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return {
        ...state,
      };
  }
}

export default adminReducer;
