import React, { useRef } from "react";
import Github from "../public/github.svg";
import Linkedin from "../public/linkedin.svg";
import Home from "../public/home.svg";
import MailOpen from "../public/mail-open.svg";
import MailPencil from "../public/mail-pencil.svg";
import Telephone from "../public/telephone.svg";
import emailjs from "@emailjs/browser";
// console.log(process.env.NEXT_PUBLIC_ID);

const publicId = process.env.NEXT_PUBLIC_ID;
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = {
      user_name: form.current.user_name.value,
      user_firstName: form.current.user_firstName.value,
      user_email: form.current.user_email.value,
      tel: form.current.tel.value,
      objet: form.current.objet.value,
      message: form.current.message.value,
      from_name: "Davit",
    };
    const formMess = document.querySelector(".form-message");
    emailjs
      .send(
        "service_ds018t1", // ID du service EmailJS
        // "template_810ie0h", // ID du modèle d'email
        formData, // Objet avec les données du formulaire
        publicId // Clé publique de votre compte EmailJS
      )
      .then(
        () => {
          // console.log("SUCCESS!");
          // form.current.reset();
          formMess.innerHTML = "<p className='success'> Message envoyé !</p>";
          // setTimeout(() => {
          //   formMess.innerHTML = "";
          // }, 2500);
        },
        (error) => {
          console.log("FAILED...", error.text);
          formMess.innerHTML =
            "<span className='error'> Une error s'est produit veuillez réessayer !</span>";
        }
      );
  };
  // console.log(process.env.REACT_APP_ID);
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
            <form className="formContent" ref={form} onSubmit={sendEmail}>
              <div className="inputGroup">
                <div className="left">
                  <label htmlFor="name">Nom *</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    autoComplete="off"
                    id="name"
                  />
                </div>
                <div className="rigth">
                  <label htmlFor="prenom">Prénom</label>
                  <input
                    type="text"
                    name="user_firstName"
                    required
                    autoComplete="off"
                    id="prenom"
                  />
                </div>
              </div>
              <div className="inputGroup">
                <div className="left">
                  <label htmlFor="email">E-Mail *</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    autoComplete="off"
                    id="email"
                  />
                </div>
                <div className="right">
                  <label htmlFor="telephone">Téléphone</label>
                  <input
                    name="tel"
                    required
                    autoComplete="off"
                    id="telephone"
                    type="tel"
                    pattern="^\+?\s*(\d+\s?){8,}$"
                    onChange={(e) => {
                      e.target.value;
                    }}
                  />
                </div>
              </div>
              <div className="inputObjet">
                <label htmlFor="objet">Objet *</label>
                <input
                  type="text"
                  name="objet"
                  required
                  autoComplete="off"
                  id="objet"
                />
              </div>
              <div className="inputmessage">
                <label htmlFor="message">Message *</label>
                <textarea name="message" required id="message" />
              </div>
              <input type="submit" value="Envoyer" className="button" />
              <div className="form-message"></div>
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
