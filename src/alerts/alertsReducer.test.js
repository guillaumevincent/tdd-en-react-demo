import reducer from "./alertsReducer";
import * as types from "./alertsActionsTypes";

test("AFFICHER_UNE_ALERTE", () => {
  expect(
    reducer(undefined, {
      type: types.AFFICHER_UNE_ALERTE,
      alerte: {
        id: "a1",
        type: "success",
        title: "",
      },
    })
  ).toEqual({
    a1: {
      id: "a1",
      type: "success",
      title: "",
    },
  });
});

test("AFFICHER_UNE_ALERTE keep existing alerts", () => {
  expect(
    reducer(
      {
        a1: {
          id: "a1",
          type: "success",
          title: "",
        },
      },
      {
        type: types.AFFICHER_UNE_ALERTE,
        alerte: {
          id: "a2",
          type: "success",
          title: "",
        },
      }
    )
  ).toEqual({
    a1: {
      id: "a1",
      type: "success",
      title: "",
    },
    a2: {
      id: "a2",
      type: "success",
      title: "",
    },
  });
});

test("CACHER_UNE_ALERTE", () => {
  expect(
    reducer(
      {
        a1: {
          id: "a1",
          type: "success",
          title: "",
        },
        a2: {
          id: "a2",
          type: "success",
          title: "",
        },
      },
      {
        type: types.CACHER_UNE_ALERTE,
        alerte: {
          id: "a1",
          type: "success",
          title: "",
        },
      }
    )
  ).toEqual({
    a2: {
      id: "a2",
      type: "success",
      title: "",
    },
  });
});
