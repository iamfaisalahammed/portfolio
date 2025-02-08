import img from "../../Image/faisal-devs.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm size-72 rounded-full shadow-2xl" />
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-xl border border-white/20 glass ">
            <h3 className="text-white">Hello, I am</h3>
            <h1 className="text-3xl font-bold text-white">Faisal Ahammed</h1>
            <p className="py-2 text-white uppercase ">full stack developer </p>
            <p className="text-gray-300">
              I am a passionate web developer with a keen interest in exploring
              and mastering new technologies. Constantly learning, innovating,
              and building solutions that make an impact!
            </p>
            <button className="btn glass mt-3 text-black uppercase font-bold">
              hire me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
