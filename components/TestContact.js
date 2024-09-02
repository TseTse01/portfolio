import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const TestContact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);
    setMessage("");

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
      from_name: "Davit",
    };

    emailjs
      .send(
        "service_ds018t1", // ID du service EmailJS
        "template_810ie0h", // ID du modèle d'email
        formData, // Objet avec les données du formulaire
        "oG2FObfoSDVjvmHKe" // Clé publique de votre compte EmailJS
      )
      .then(
        () => {
          setMessage("Message envoyé avec succès !");
        },
        (error) => {
          console.error("FAILED...", error);
          setMessage("Échec de l'envoi... Veuillez réessayer plus tard.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" disabled={isSending} />
      {message && <p>{message}</p>}
    </form>
  );
};

export default TestContact;
