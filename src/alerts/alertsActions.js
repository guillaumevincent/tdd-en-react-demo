import * as types from "./alertsActionsTypes";

export function afficherUneAlerte(alerte) {
  return {
    type: types.AFFICHER_UNE_ALERTE,
    alerte,
  };
}
