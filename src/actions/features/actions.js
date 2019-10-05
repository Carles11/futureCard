import * as ACTION from "./actionsType";

export function getFeatures(features, code, lang) {
  return {
    type: ACTION.GET_FEATURES,
    features,
    code,
    lang
  };
}

export function fakeLint() {}
