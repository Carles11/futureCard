/* eslint-disable import/prefer-default-export */
import * as ACTION from "./actionsType";

export function sendEmail(emailBody) {
  return { type: ACTION.SEND_EMAIL, emailBody };
}
