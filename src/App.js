import "./App.css";
import About from "./components/About/";
import TechnologyStack from "./components/TechStack/";
import Navbar from "./components/Navbar/";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <TechnologyStack />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
