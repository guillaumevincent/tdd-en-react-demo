import * as types from "./alertsActionsTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.AFFICHER_UNE_ALERTE:
      return {
        ...state,
        [action.alerte.id]: action.alerte,
      };
    case types.CACHER_UNE_ALERTE:
      delete state[action.alerte.id];
      return {
        ...state,
      };
    default:
      return state;
  }
}
