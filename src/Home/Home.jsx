import About from "./Section/About";
import Banner from "./Section/Banner";
import Footer from "./Section/Footer";
import Nav from "./Section/Nav";

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
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
