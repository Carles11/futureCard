const INITIAL_STATE = {
  fontColor: "#0d1326",
  fontColorDarker: "#222430",
  fontWhite: "#ffffff",
  mainColor: "#fe4d10",
  background: "#0d1326"
};

export default function themeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
