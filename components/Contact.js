import React from "react";
import Github from "../public/github.svg";
import Linkedin from "../public/linkedin.svg";
import Home from "../public/home.svg";
import MailOpen from "../public/mail-open.svg";
import MailPencil from "../public/mail-pencil.svg";
import Telephone from "../public/telephone.svg";

const Contact = () => {
  return (
    <div className="sectionContact">
      <div className="contactContainer">
        <div className="title">
          <p>CONTACTEZ-MOI</p>
        </div>
        <div className="text">
          Vous pouvez me contacter via le formulaire ou les liens proposés, je
          vous répondrai dans les plus brefs délais.
        </div>
        <div className="contactBox">
          <div className="contact">
            <form className="formContent">
              <div className="inputGroup">
                <label htmlFor="name">Nom *</label>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="off"
                  id="name"
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="prenom">Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  required
                  autoComplete="off"
                  id="prenom"
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="email">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                  id="email"
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="telephone">Téléphone</label>
                <input
                  type="tel"
                  name="telephone"
                  required
                  autoComplete="off"
                  id="telephone"
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="objet">Objet *</label>
                <input
                  type="text"
                  name="objet"
                  required
                  autoComplete="off"
                  id="objet"
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="message">Message *</label>
                <textarea name="message" required id="message" />
              </div>
              <input type="submit" value="Envoyer" className="button" />
            </form>
          </div>
          <div className="contactInfo">
            <p>
              <i className="mailSvg">
                <MailPencil height={30} width={30} />
              </i>{" "}
              tsetsedavit3@gmail.com
            </p>
            <p>
              <i className="telephoneSvg">
                <Telephone height={30} width={30} />
              </i>{" "}
              0768582224
            </p>
            <p>
              <i className="homeSvg">
                <Home height={30} width={30} />
              </i>{" "}
              Paris, Île-de-France
            </p>
            <a href="https://www.linkedin.com" target="_blank">
              <Linkedin height={40} width={40} />
            </a>
            <a href="https://github.com/" target="_blank">
              <Github height={40} width={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
