import * as ACTION from './actions';

export const getProducts = () => (dispatch) => {
  try {
    const fakeDDBBrequest = { id: 1, name: 'Fake product' };

    dispatch(ACTION.getProducts(fakeDDBBrequest));
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
