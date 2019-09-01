/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import * as ACTION from './actions';

export const sendEmail = emailBody => (dispatch) => {
  try {
    axios
      .post('http://localhost:4444/crix-mail-api/index.js', emailBody)
      .then(res => dispatch(ACTION.sendEmail(res)))
      .catch((err) => {
        throw Error(err);
      });
  } catch (error) {
    throw new Error('Failed to send e-mail');
  }
};
