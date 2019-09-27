import api from '@src/utils/API';
import * as ACTION from './actions';

export const logIn = body => async (dispatch) => {
  try {
    const response = await api.logIn(body);
    if (response.success && response.data) {
      dispatch(ACTION.logIn(response.data));
    }
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export function fakeLint() {}
