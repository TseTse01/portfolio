import Navbar from "../components/Navbar";
import Profil from "../components/Profil";
import Portfolio from "../components/Portfolio";
import Competences from "../components/Competences";
import Contact from "../components/Contact";
import AnimatedTextInput from "../components/AnimatedTextInput";

function Home() {
  return (
    <div className="appContainer">
      <Navbar />
      <div className="header">
        <AnimatedTextInput />
      </div>
      <Profil />
      <Portfolio />
      <Competences />
      <Contact />
    </div>
  );
}

export default Home;
