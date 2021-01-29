import React from "react";
import { Link, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/login">Se connecter</Link>
          </li>
          <li>
            <Link to="/register">Créer un compte</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </div>
  );
}

export default App;
