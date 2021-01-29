import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

export const InitApp = ({ history = createMemoryHistory() }) => {
  return (
    <Router history={history}>
      <App />
    </Router>
  );
};

test("routing pages unauth", async () => {
  const history = createMemoryHistory();
  render(<InitApp history={history} />);
  expect(history.location.pathname).toBe("/");
  fireEvent.click(screen.queryByText(/Se connecter/i));
  expect(history.location.pathname).toBe("/login");
  fireEvent.click(screen.queryByText(/Créer un compte/i));
  expect(history.location.pathname).toBe("/register");
  fireEvent.click(screen.queryByText(/Accueil/i));
  expect(history.location.pathname).toBe("/");
});
