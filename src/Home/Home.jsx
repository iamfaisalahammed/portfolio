import Banner from "./Section/Banner";
import Footer from "./Section/Footer";
import Nav from "./Section/Nav";

const Home = () => {
  return (
    <div className="h-screen bg-[#212122] pt-16">
      <div className="container mx-auto">
        <Nav></Nav>
        <Banner></Banner>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
