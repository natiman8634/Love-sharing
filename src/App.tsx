import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import EthiopiaSection from "./components/EthiopiaSection";
import About from "./components/About";
import Purpose from "./components/Purpose";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Purpose />
      <EthiopiaSection />
      <Teams />
      <About />
      <Footer />
    </>
  );
}

export default App;