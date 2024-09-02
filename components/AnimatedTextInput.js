import React, { useState, useEffect } from "react";

const AnimatedTextInput = () => {
  const [profil, setProfil] = useState(null);
  useEffect(() => {
    setProfil(document.querySelector(".sectionprofil"));
  }, []);

  const handleInput = (el) => {
    // Scroll vers l'élément profil
    console.log(el);
    el?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <h1 className="hello-world">Hello Visiteur!🖐️</h1>
      <h1 className="hello-world">I'm a developpeur web & mobile 📱</h1>
      {/* <h1 className="hello-world">Davit Tsetsadze</h1> */}
      {/* <h1 className="hello-world">Developpeur web & mobile</h1> */}
      <button onClick={() => handleInput(profil)}>plus d'info</button>
    </div>
  );
};

export default AnimatedTextInput;
