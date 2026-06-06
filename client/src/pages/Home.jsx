import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import EducationQualifications from '../components/EducationQualifications';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkExperience />
      <EducationQualifications />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
