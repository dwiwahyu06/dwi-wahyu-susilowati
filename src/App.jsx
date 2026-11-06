import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Project />
        <Certificate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
