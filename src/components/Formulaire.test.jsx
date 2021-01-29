import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulaire from "./Formulaire";

test("Quand je clique sur le label Email, le champ texte en dessous est selectionné", () => {
  render(<Formulaire />);
  const labelEmail = screen.getByLabelText(/Email/i);
  userEvent.click(labelEmail);
  const email = screen.getByRole("textbox", { name: /email/i });
  expect(email).toHaveFocus();
});

test("Les caractères dans le champ mot de passe sont masqués", () => {
  render(<Formulaire />);
  const champMotDePasse = screen.getByLabelText(/Mot de passe/i);
  expect(champMotDePasse).toHaveValue("");
  userEvent.type(champMotDePasse, "a");
  expect(champMotDePasse).toHaveValue("a");
  expect(champMotDePasse.type).toBe("password");
});

test('Quand on clique sur le bouton "Se Connecter" ?', () => {
  const mockLorsDeLaSoumission = jest.fn();
  render(<Formulaire lorsDeLaSoumission={mockLorsDeLaSoumission} />);
  const labelEmail = screen.getByLabelText(/Email/i);
  userEvent.type(labelEmail, "test@example.org");
  const champMotDePasse = screen.getByLabelText(/Mot de passe/i);
  userEvent.type(champMotDePasse, "password");
  const boutonSeConnecter = screen.getByRole("button", {
    name: /Se Connecter/i,
  });
  fireEvent.click(boutonSeConnecter);
  expect(mockLorsDeLaSoumission.mock.calls.length).toBe(1);
  expect(mockLorsDeLaSoumission.mock.calls[0][0]).toEqual({
    email: "test@example.org",
    password: "password",
  });
});
