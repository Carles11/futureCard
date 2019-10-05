import * as ACTION from "../actions/contact/actionsType";

const INITIAL_STATE = {
  emailBody: {}
};

export default function mailReducer(state = INITIAL_STATE, action) {
  // console.log("action", action);
  switch (action.type) {
    case ACTION.SEND_EMAIL:
      return { ...state, emailBody: action.emailBody };
    default:
      return { ...state };
  }
}
