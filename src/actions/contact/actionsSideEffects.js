/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import API from '@src/utils/API';

import * as ACTION from './actions';

export const sendEmail = emailBody => async dispatch => {
  try {
    const response = await API.post('mail', emailBody);
    dispatch(ACTION.sendEmail(response));
  } catch (error) {
    throw new Error('Failed to send e-mail');
  }
};
