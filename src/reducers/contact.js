import * as ACTION from '../actions/contact/actionsType';
import handleSendEmail from '../utils/emails';

const emailBody = handleSendEmail(emailBody);

const INITIAL_STATE = {
  emailBody,
};

export default function mailReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.SEND_EMAIL:
      return action.contact;
    default:
      return state;
  }
}
