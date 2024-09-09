import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedTextInput = () => {
  const [profil, setProfil] = useState(null);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const words = ["Visiteur !", "recruteur ?!"];

  useEffect(() => {
    setProfil(document.querySelector(".sectionprofil"));
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause avant de commencer à supprimer
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 100 : 200);
    };

    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleInput = (el) => {
    el?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <div className="container">
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <h1 className="hello-world h1">
          <motion.h1
            drag
            dragConstraints={{
              left: -250,
              right: 950,
              top: -200,
              bottom: 250,
            }}
          >
            Hello <span className="textAnim"> {text}</span>🖐️
          </motion.h1>
        </h1>
      </motion.div>
      <h1 className="hello-world">I'm a developpeur web & mobile 📱</h1>
      <button onClick={() => handleInput(profil)}>plus d'info</button>
    </div>
  );
};

export default AnimatedTextInput;
