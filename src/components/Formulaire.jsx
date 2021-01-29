import React, { useState } from "react";

export default function Formulaire({ lorsDeLaSoumission }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        lorsDeLaSoumission({ email, password });
      }}
    >
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Se Connecter</button>
    </form>
  );
}
