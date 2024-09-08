import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [accueil, SetAccueil] = useState(null);
  const [contact, setContact] = useState(null);
  const [profil, setProfil] = useState(null);
  const [portfolio, SetPortfolio] = useState(null);
  const [competence, setCompetence] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    SetAccueil(document.querySelector(".header"));
    setContact(document.querySelector(".sectionContact"));
    setProfil(document.querySelector(".sectionprofil"));
    SetPortfolio(document.querySelector(".sectionPortfolio"));
    setCompetence(document.querySelector(".sectionCompetence"));

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scroll vers le bas
        setNavbarVisible(false);
      } else {
        // Scroll vers le haut
        setNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Retire `lastScrollY` des dépendances si tu utilises `useEffect` avec un état mis à jour dans le hook.

  const handleCklik = (ref) => {
    ref?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={`navbarC ${navbarVisible ? "visible" : "hidden"}`}>
      <div className="logoContainer">
        <Image
          className="logo"
          src="/logo.png"
          width={100}
          height={100}
          alt="logo of the author"
          onClick={() => {
            handleCklik(accueil);
          }}
        />
      </div>
      <div className="linksContainer">
        <div
          className="navlink"
          onClick={() => {
            handleCklik(accueil);
          }}
        >
          Accueil
        </div>
        <div
          className="navlink"
          onClick={() => {
            handleCklik(profil);
          }}
        >
          Profil
        </div>
        <div
          className="navlink"
          onClick={() => {
            handleCklik(portfolio);
          }}
        >
          Portfolio
        </div>
        <div
          className="navlink"
          onClick={() => {
            handleCklik(competence);
          }}
        >
          Compétences
        </div>
        <div
          className="navlink"
          onClick={() => {
            handleCklik(contact);
          }}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
