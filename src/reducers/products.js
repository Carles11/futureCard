import * as ACTION from '../actions/products/actionsType';

const INITIAL_STATE = {
  id: null,
  name: '',
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
