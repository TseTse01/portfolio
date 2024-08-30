import React from "react";
import Image from "next/image";
import JavascriptSvg from "../public/javascript.svg";
import CssSvg from "../public/css.svg";
import HtmlSvg from "../public/html-5.svg";
import MongoDBSvg from "../public/mongodb.svg";
import NodeSvg from "../public/nodejs.svg";
import ReactSvg from "../public/react.svg";
import ScssSvg from "../public/scss2.svg";
import ReactNativeSvg from "../public/react_native.svg";
import mountain from "../public/mountain.png";
const Portfolio = () => {
  return (
    <div className="sectionPortfolio">
      <div className="portfolio">
        <div className="titlePortfolio">
          <p>Portfolio...</p>
        </div>

        <div className="projectContainer">
          <div className="card">
            <div className="image">
              <Image
                className="logo"
                src={mountain}
                width={400}
                height={400}
                alt="logo of the author"
              />
            </div>
            <p>Find your wave application SPA</p>
            <p>project a ete developpé aevec :</p>
            <div className="imageLanguage">
              <HtmlSvg height={40} width={40} />
              <MongoDBSvg height={40} width={40} />
              <NodeSvg height={40} width={40} />
              <ReactSvg height={40} width={40} />
              <ScssSvg height={40} width={40} />
              <CssSvg height={40} width={40} />
              <JavascriptSvg height={40} width={40} />
              {/* <ReactNativeSvg height={40} width={40} /> */}
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image
                className="logo"
                src="/gamingCampus.png"
                width={400}
                height={400}
                alt="logo of the author"
              />
            </div>
            <p>Find your wave application SPA</p>
            <p>project a ete developpé aevc</p>
          </div>
          <div className="card">
            <div className="image">
              <Image
                className="logo"
                src="/cinema1.png"
                width={400}
                height={400}
                alt="logo of the author"
              />
            </div>
            <p>Find your wave application SPA</p>
            <p>project a ete developpé aevc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
