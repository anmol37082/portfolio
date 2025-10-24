import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Blogs from "./components/Blogs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Awards />
      <Blogs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
