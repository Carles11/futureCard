import { GET_PRODUCTS } from '../actionCreators/actionsType';

export default function productReducer(state = ['Just a tiny product'], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
