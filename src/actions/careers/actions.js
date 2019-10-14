import * as ACTION from './actionsType';

export function getCareers(careers) {
  return { type: ACTION.GET_CAREERS, careers };
}

export function setCareers(career) {
  return { type: ACTION.SET_CAREERS, career };
}

export function errorCareers(error) {
  return { type: ACTION.ERROR_CAREERS, error };
}
