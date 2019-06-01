import { GET_PRODUCTS } from './actionsType';

export default function getProducts() {
  return { type: GET_PRODUCTS, payload: ['more products'] };
}
