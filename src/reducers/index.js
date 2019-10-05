import { combineReducers } from "redux";

import contact from "./contact";
import dictionary from "./dictionary";
import theme from "./theme";
import location from "./location";
import careers from "./careers";
import news from "./news";
import cards from "./cards";
import features from "./features";
import admin from "./admin";

export default combineReducers({
  dictionary,
  theme,
  location,
  contact,
  careers,
  news,
  cards,
  features,
  admin
});
