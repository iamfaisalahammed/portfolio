import About from "./Section/About";
import Banner from "./Section/Banner";
import Education from "./Section/Education";
import Footer from "./Section/Footer";
import Nav from "./Section/Nav";
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
        <div id="education">
          <Education></Education>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
