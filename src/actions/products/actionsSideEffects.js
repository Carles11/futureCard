import api from '@src/utils/API';
import * as ACTION from './actions';

export const getProducts = () => async (dispatch) => {
  try {
    const products = await api.get('products');
    dispatch(ACTION.getProducts(products));
  } catch (error) {
    throw new Error('SOmething went wrong');
  }
};

export const filterProduct = () => (dispatch) => {
  try {
    dispatch(ACTION.filterProduct({ id: 2, name: 'just filtered' }));
  } catch (error) {
    throw new Error('SOmething went wrong');
  }
};
