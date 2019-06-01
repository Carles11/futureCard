import { GET_PRODUCTS } from './actionsType';

interface Product {
  type: string,
  payload: Array<string>
}

export function getProducts(): Product {
  return { type: GET_PRODUCTS, payload: ['more products'] };
}

console.log(getProducts());
