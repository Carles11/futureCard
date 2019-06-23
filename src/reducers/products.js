import * as ACTION from '../actions/products/actionsType';

const INITIAL_STATE = {
  id: null,
  name: 'Initial product',
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.GET_PRODUCTS:
      return action.product;
    case ACTION.FILTER_PRODUCTS:
      return action.product;
    default:
      return state;
  }
}
