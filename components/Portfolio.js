import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import svg languag
import JavascriptSvg from "../public/javascript.svg";
import CssSvg from "../public/css.svg";
import HtmlSvg from "../public/html-5.svg";
import MongoDBSvg from "../public/mongodb.svg";
import NodeSvg from "../public/nodejs.svg";
import ReactSvg from "../public/react.svg";
import ScssSvg from "../public/scss2.svg";
import ReactNativeSvg from "../public/react_native.svg";
import Modal from "./Modal";

const Portfolio = () => {
  const [isModalvisible, setIsModalVisible] = useState(false);
  const handelCklick = () => {
    setIsModalVisible(!isModalvisible);
  };
  return (
    <div className="sectionPortfolio">
      <div className="portfolio">
        <div className="titlePortfolio">
          <Modal isModalvisible={isModalvisible} />
          <p>Portfolio...</p>
        </div>

        <div className="projectContainer">
          <div className="card">
            <div className="image">
              <Link href="https://cinema-app-gamma.vercel.app/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    className="logo"
                    src="/cinema.png"
                    width={350}
                    height={350}
                    alt="logo of the author"
                  />
                </a>
              </Link>
            </div>
            {/* <p>Find your wave application SPA</p> */}
            <p onClick={handelCklick}>project a ete developpé avec : </p>
            <div className="imageLanguage">
              <HtmlSvg height={40} width={40} />
              <JavascriptSvg height={40} width={40} />
              <ReactSvg height={40} width={40} />
              <ScssSvg height={40} width={40} />
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Link
                href="https://crypto-watch-react-project.vercel.app/"
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    className="logo"
                    src="/crypto_watch.png"
                    width={350}
                    height={350}
                    alt="logo of the author"
                  />
                </a>
              </Link>
            </div>
            {/* <p>Find your wave application SPA</p> */}
            <p>project a ete developpé avec : </p>
            <div className="imageLanguage">
              <HtmlSvg height={40} width={40} />
              <JavascriptSvg height={40} width={40} />
              <ReactSvg height={40} width={40} />
              <ScssSvg height={40} width={40} />
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image
                className="logo"
                src="/velodispo.jpg"
                width={350}
                height={350}
                alt="logo of the author"
              />
            </div>
            {/* <p>Find your wave application SPA</p> */}
            <p>project a ete developpé avec : </p>
            <div className="imageLanguage">
              <HtmlSvg height={40} width={40} />
              <JavascriptSvg height={40} width={40} />
              <ReactSvg height={40} width={40} />
              <NodeSvg height={40} width={40} />
              <MongoDBSvg height={40} width={40} />
              {/* <CssSvg height={40} width={40} /> */}
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Link href="https://project-mountain-html.vercel.app/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    className="logo"
                    src="/mountain.png"
                    width={350}
                    height={350}
                    alt="logo of the author"
                  />
                </a>
              </Link>
            </div>
            {/* <p>Find your wave application SPA</p> */}
            <p>project a ete developpé avec : </p>
            <div className="imageLanguage">
              <HtmlSvg height={40} width={40} className="svg" />
              <ScssSvg height={40} width={40} className="svg" />
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Link href="https://gaming-campus-html-css.vercel.app/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    className="logo"
                    src="/gamingCampus.png"
                    width={350}
                    height={350}
                    alt="logo of the author"
                  />
                </a>
              </Link>
            </div>
            {/* <p>Find your wave application SPA</p> */}
            <p>project a ete developpé avec : </p>
            <div className="imageLanguage">
              <HtmlSvg height={40} width={40} />
              <CssSvg height={40} width={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
