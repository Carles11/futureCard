import * as ACTION from './actionsType';

export default function getProducts() {
  return { type: ACTION.GET_PRODUCTS, payload: ['more products'] };
}
