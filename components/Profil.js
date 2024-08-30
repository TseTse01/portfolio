import React from "react";
import Image from "next/image";
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            numquam praesentium minus odit totam nam laborum maxime dolore.
            Pariatur, dolorem! Corporis fuga inventore neque magnam. Ut odio
            vitae error non soluta quibusdam molestias eaque assumenda, officia
            quae alias ducimus cum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
