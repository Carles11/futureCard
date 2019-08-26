/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';
import axios from 'axios';

import * as ACTION from './actions';

export const sendEmail = emailBody => (dispatch) => {
  try {
    axios.post('http://localhost:4444/crix-mail-api/index.js', emailBody)
      .then(res => dispatch(ACTION.sendEmail(res)))
      .catch((err) => {
        throw Error(err)
      });
  } catch (error) {
    throw new Error('Failed to send e-mail');
  }
};

sendEmail.propTypes = {
  DIC: PropTypes.shape({
    BUTTON_SEND: PropTypes.string.isRequired,
    BUTTON_NOT_SENT: PropTypes.string.isRequired,
    BUTTON_SENDING: PropTypes.string.isRequired,
  }).isRequired,
};
