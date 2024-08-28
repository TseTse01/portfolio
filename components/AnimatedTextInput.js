import React, { useState, useEffect } from "react";

const AnimatedTextInput = () => {
  const [profil, setProfil] = useState(null);

  const handleInput = (e) => {
    e.preventDefault();
    // Scroll vers l'élément profil
    profil?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setProfil(document.querySelector(".profilContainer"));
  }, []);

  return (
    <div className="container">
      <h1 className="hello-world">Hello Visiteur!🖐️</h1>
      <h1 className="hello-world">I'm a developpeur web & mobile 📱</h1>
      {/* <h1 className="hello-world">Davit Tsetsadze</h1> */}
      {/* <h1 className="hello-world">Developpeur web & mobile</h1> */}
      <button onClick={handleInput}>plus d'info</button>
    </div>
  );
};

export default AnimatedTextInput;
