import React from "react";
import Image from "next/image";
import DownloadCVButton from "./DownloadCVButton";

const Profil = () => {
  return (
    <div className="sectionprofil">
      <div className="titleProfil">A propos de moi...</div>
      <div className="descriptionContainer">
        <div className="photo">
          <Image
            className="image"
            src="/myphoto.jpeg"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div className="description">
          <p className="text">
            Après de nombreuses années dans des secteurs aussi différents que
            passionnants j’ai décidé de donner un nouveau souffle à ma carrière
            et d’oser vivre un rêve : Développeur Web. J’ai commencé par une
            première formation en ligne FromScratch pour apprendre des base et
            enchaîné avec une formation intensive de 2 mois et demie pour un
            titre de développeur Web/Mobile RNCP niveau 6 avec la formation La
            Capsule. Passionné avant tout, je réalise de nombreux
            “side-projects” pour monter en compétence, et découvrir de nouveaux
            outils, mais soyons honnête... pour m'amuser aussi !
          </p>
          <DownloadCVButton />
        </div>
      </div>
    </div>
  );
};

export default Profil;
