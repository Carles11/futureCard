import * as ACTION from './actionsType';

export const logIn = token => ({
  type: ACTION.LOG_IN,
  token,
});
export const logOut = () => ({});
