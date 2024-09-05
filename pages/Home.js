import Navbar from "../components/Navbar";
import Profil from "../components/Profil";
import Portfolio from "../components/Portfolio";
import Competences from "../components/Competences";
import AnimatedTextInput from "../components/AnimatedTextInput";
import Contact from "../components/Contact";
import TestContact from "../components/TestContact";
// import Mouse from "../components/Mouse";

function Home() {
  return (
    <div className="appContainer">
      {/* <Mouse /> */}
      <Navbar />
      <div className="header">
        <AnimatedTextInput />
      </div>
      <Profil />
      <Portfolio />
      <Competences />
      <Contact />
      {/* <TestContact /> */}
    </div>
  );
}

export default Home;
