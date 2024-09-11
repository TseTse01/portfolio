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
import ModalVeloDispo from "./ModalVeloDispo";
// import { useDispatch } from "react-redux";
// import { isClicked } from "../reducers/user";

const Portfolio = () => {
  const [isModalvisible, setIsModalVisible] = useState(false);
  // const dispatch = useDispatch();
  const handelCklick = () => {
    setIsModalVisible(!isModalvisible);
    // dispatch(isClicked(!isModalvisible));
  };
  return (
    <div className="sectionPortfolio">
      <div className="portfolio">
        <div className="titlePortfolio">
          <p>Portfolio...</p>
        </div>
        <ModalVeloDispo
          handelCklick={handelCklick}
          isModalvisible={isModalvisible}
        />
        <div className="projectContainer">
          <div className="cardC">
            <div className="image">
              <Link href="https://cinema-app-gamma.vercel.app/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    className="logo"
                    src="/mymovie-gradient.png"
                    width={350}
                    height={350}
                    alt="logo of the author"
                  />
                </a>
              </Link>
            </div>
            <div>
              <h2>My movies</h2>
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
          <div className="cardC">
            <div className="image">
              <Link
                href="https://crypto-watch-react-project.vercel.app/"
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    className="logo"
                    src="/bitcoin-gradient.png"
                    width={350}
                    height={350}
                    alt="logo of the author"
                  />
                </a>
              </Link>
            </div>
            <div>
              <h2>Crypto-watch</h2>
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
          <div className="cardC">
            <div className="image" onClick={handelCklick}>
              <Image
                className="logo"
                src="/velo-gradient.png"
                width={350}
                height={350}
                alt="logo of the author"
              />
            </div>
            <div>
              <h2>VelodispØ</h2>
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
          <div className="cardC">
            <div className="image">
              <Link href="https://project-mountain-html.vercel.app/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    className="logo"
                    src="/lamontagne-gradient.png"
                    width={350}
                    height={350}
                    alt="logo of the author"
                  />
                </a>
              </Link>
            </div>
            <div>
              <h2>Travel</h2>
            </div>
            {/* <p>Find your wave application SPA</p> */}
            <p>project a ete developpé avec : </p>
            <div className="imageLanguage">
              <HtmlSvg height={40} width={40} className="svg" />
              <ScssSvg height={40} width={40} className="svg" />
            </div>
          </div>
          <div className="cardC">
            <div className="image">
              <Link href="https://gaming-campus-html-css.vercel.app/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    className="logo"
                    src="/gaming-gradient.png"
                    width={350}
                    height={350}
                    alt="logo of the author"
                  />
                </a>
              </Link>
            </div>
            <div>
              <h2>Gaming Campus</h2>
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
