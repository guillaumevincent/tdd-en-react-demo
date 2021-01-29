import React from "react";
import Formulaire from "./components/Formulaire";

export default function LoginPage() {
  return (
    <div>
      <div>LoginPage</div>
      <Formulaire
        lorsDeLaSoumission={(formulaire) =>
          alert(JSON.stringify(formulaire, null, 2))
        }
      />
    </div>
  );
}
