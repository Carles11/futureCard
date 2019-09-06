import api from '@src/utils/API';
import * as ACTION from './actions';

export const getCareers = () => async (dispatch) => {
  try {
    const careers = await api.get('careers');
    dispatch(ACTION.getCareers(careers));
  } catch (error) {
    dispatch(ACTION.ERROR_CAREERS(error.message));
  }
};

export const setCareers = () => async () => {};
