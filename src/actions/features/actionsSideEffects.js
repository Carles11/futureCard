import api from "@src/utils/API";
import * as ACTION from "./actions";

export const getFeatures = (code, lang) => async dispatch => {
  try {
    const features = await api.get(`features?code=${code}&lang=${lang}`);
    dispatch(ACTION.getFeatures(features.data, code, lang));
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export function fakeLint() {}
