import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Banner/Hero";
import Purpose from "./components/Purpose/Purpose";
import JoinOurMission from "./components/Join-Our-Mission/Join-Our-Mission";
import Teams from "./components/Teams/Teams";
import About from "./components/About-us/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Purpose />
      <JoinOurMission />
      <Teams />
      <About />
      <Footer />
    </>
  );
}

export default App;