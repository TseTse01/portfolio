import Navbar from "../components/Navbar";
import Profil from "../components/Profil";
import Portfolio from "../components/Portfolio";
import Competences from "../components/Competences";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="appContainer">
      <div className="header">
        <Navbar />
      </div>
      <Profil />
      <Portfolio />
      <Competences />
      <Contact />
    </div>
  );
}

export default Home;
