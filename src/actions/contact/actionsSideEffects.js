/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

import * as ACTION from './actions';

export const sendEmail = () => (dispatch) => {
  try {
    const fakeSENDEMAILrequest = { body: 'Fake body' };
    // console.log("sendEmail", fakeSENDEMAILrequest)
    dispatch(ACTION.sendEmail(fakeSENDEMAILrequest));
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
