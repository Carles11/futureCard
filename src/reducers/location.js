import * as ACTION from '../actions/location/actionsType';

const INITIAL_STATE = {
  path: '/',
};

export default function locationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.GET_LOCATION:
      return {
        ...state,
        path: action.location,
      };
    default:
      return {
        ...state,
      };
  }
}
