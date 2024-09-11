import React from "react";
// import svg languag
import JavascriptSvg from "../public/javascript.svg";
import CssSvg from "../public/css.svg";
import HtmlSvg from "../public/html-5.svg";
import MongoDBSvg from "../public/mongodb.svg";
import NodeSvg from "../public/nodejs.svg";
import ReactSvg from "../public/react.svg";
import ScssSvg from "../public/scss2.svg";
import Express from "../public/express.svg";
import Git from "../public/git.svg";
import Tailwindcss from "../public/tailwindcss.svg";
import Typescript from "../public/typescript.svg";

const Competences = () => {
  return (
    <div className="sectionCompetence">
      <div className="sectionContainer">
        <div className="titleContainer">
          <h1 className="title">Mes competences</h1>
        </div>
        <div className="frontEndContainer">
          <div>
            {" "}
            <h3 className="title">Front-end</h3>
          </div>
          <div className="svgContainer">
            <JavascriptSvg height={40} width={40} />
            <ReactSvg height={40} width={40} />
            <HtmlSvg height={40} width={40} />
            <CssSvg height={40} width={40} />
            <ScssSvg height={40} width={40} />
            <Tailwindcss height={40} width={40} />
            <Typescript height={40} width={40} />
          </div>
        </div>
        <div className="frontEndContainer">
          <div>
            {" "}
            <h3 className="title">Back-End</h3>
          </div>
          <div className="svgContainer">
            <MongoDBSvg height={40} width={40} />
            <NodeSvg height={40} width={40} />
            <Express height={40} width={40} />
            <Git height={40} width={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
