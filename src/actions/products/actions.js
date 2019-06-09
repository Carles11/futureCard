import * as ACTION from './actionsType';

export function getProducts(product) {
  return { type: ACTION.GET_PRODUCTS, product };
}

export function filterProduct(product = '') {
  return { type: ACTION.FILTER_PRODUCTS, product };
}
