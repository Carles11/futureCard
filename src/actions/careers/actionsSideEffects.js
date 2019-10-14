import api from '@src/utils/API';
import * as ACTION from './actions';

export const getCareers = () => async (dispatch) => {
  try {
    const careers = await api.get('careers');
    dispatch(ACTION.getCareers(careers));
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

export const setCareers = () => async () => {};
