import React from "react";
import Image from "next/image";
const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <div className="portfolio">
        <div className="titlePortfolio">
          <p>Portfolio...</p>
        </div>
        <div className="projectContainer">
          <div className="card">
            <div className="image">
              <Image
                className="logo"
                src="/1.jpg"
                width={400}
                height={400}
                alt="logo of the author"
              />
            </div>
            <p>Find your wave application SPA</p>
            <p>project a ete developpé aevec :</p>
            <div className="imageLanguage">
              <Image
                className="logo"
                src="/reactNative1.png"
                width={40}
                height={40}
                alt="logo of the author"
              />{" "}
              <Image
                className="logo"
                src="/mongoDB1.png"
                width={40}
                height={40}
                alt="logo of the author"
              />{" "}
              <Image
                className="logo"
                src="/nodejs1.png"
                width={40}
                height={40}
                alt="logo of the author"
              />{" "}
              <Image
                className="logo"
                src="/1.jpg"
                width={40}
                height={40}
                alt="logo of the author"
              />{" "}
              <Image
                className="logo"
                src="/1.jpg"
                width={40}
                height={40}
                alt="logo of the author"
              />
              <Image
                className="logo"
                src="/1.jpg"
                width={40}
                height={40}
                alt="logo of the author"
              />
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image
                className="logo"
                src="/2.jpg"
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
                src="/node1.png"
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
                src="/logo.png"
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
                src="/logo.png"
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
                src="/logo.png"
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
