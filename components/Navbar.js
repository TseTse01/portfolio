import React from "react";
import Image from "next/image";
import { useRef } from "react";
const Navbar = () => {
  const ref = useRef(null);

  const handleScroll = (targetRef) => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar">
      <div className="logoContainer">
        <Image
          className="logo"
          src="/logo.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div className="linksContainer">
        <div className="navlink" onClick={() => handleScroll(ref)}>
          Accueil
        </div>
        <div className="navlink" onClick={() => handleScroll(ref)}>
          Profil
        </div>
        <div className="navlink" onClick={() => handleScroll(ref)}>
          Portfolio
        </div>
        <div className="navlink" onClick={() => handleScroll(ref)}>
          Compétences
        </div>
        <div className="navlink" onClick={() => handleScroll(ref)}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
