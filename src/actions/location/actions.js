import * as ACTION from './actionsType';

export function getLocation(location) {
  return { type: ACTION.GET_LOCATION, location };
}

export function fake() {}
