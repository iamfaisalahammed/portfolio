import AdditionalSkills from "./AdditionalSkills";
import About from "./Section/About";
import Banner from "./Section/Banner";
import Contact from "./Section/Contact";
import Education from "./Section/Education";
import Footer from "./Section/Footer";
import Nav from "./Section/Nav";
import Project from "./Section/Project";
import Skills from "./Section/Skills";

const Home = () => {
  return (
    <div className="bg-[#212122]  pt-16">
      <div className="container mx-auto ">
        <Nav></Nav>
        <div id="home">
          <Banner></Banner>
        </div>
        <div id="about-section">
          <About></About>
        </div>
        <div id="skills">
          <Skills></Skills>
        </div>
        <AdditionalSkills></AdditionalSkills>
        <div id="education">
          <Education></Education>
        </div>
        <div id="project">
          <Project></Project>
        </div>
        <div id="contact">
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
