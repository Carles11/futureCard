/* eslint-disable import/prefer-default-export */
import * as ACTION from './actionsType';

export function sendEmail(emailBody) {
  console.log('emailBody in sendEmailActions', emailBody);
  return { type: ACTION.SEND_EMAIL, emailBody };
}
