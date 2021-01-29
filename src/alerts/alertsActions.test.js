import { afficherUneAlerte } from "./alertsActions";
import * as types from "./alertsActionsTypes";

test("afficherUneAlerte", () => {
  expect(
    afficherUneAlerte({
      id: "a1",
      type: "success",
      title: "",
    })
  ).toEqual({
    type: types.AFFICHER_UNE_ALERTE,
    alerte: {
      id: "a1",
      type: "success",
      title: "",
    },
  });
});
