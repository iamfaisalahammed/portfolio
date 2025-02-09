import img from "../../Image/Ahammed.jpg";
const Project = () => {
  return (
    <section className="mb-2">
      <h1 className="text-3xl font-bold text-center my-4 text-white uppercase">
        Project
      </h1>

      {/* Project -1 */}
      <div className="hero bg-black min-h-screen pb-4">
        <div className="hero-content flex-col lg:flex-row gap-10 items-start justify-start">
          <div className="relative w-full sm:w-11/12 lg:w-auto">
            <div className="hidden lg:block lg:absolute top-8 left-16 border-8 border-gray-300 w-full h-full rounded-xl"></div>
            <img
              src={img}
              className="max-w-sm rounded-lg shadow-2xl w-11/12 lg:w-auto lg:relative"
            />
          </div>
          <div className="text-left">
            <h3 className="text-white text-xl font-semibold mt-3 lg:mx-auto lg:w-8/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="text-white mt-3 lg:mx-auto lg:w-8/12">
              I’m Faisal Ahammed, a passionate MERN Stack Developer with
              expertise in building dynamic and scalable web applications. I
              have a deep interest in modern web technologies and love crafting
              efficient, high-performing applications. With hands-on experience
              in React, Node.js, Express, and MongoDB, I specialize in creating
              full-stack solutions that are both user-friendly and robust. I am
              always eager to learn new technologies and improve my development
              skills. Over the years, I have worked on various projects ranging
              from e-commerce platforms, admin dashboards, and content
              management systems to real-time applications. I always strive to
              write clean, maintainable, and optimized code while focusing on
              delivering seamless user experiences.
              <br />
              <div className=" flex justify-center">
                <button className="px-4 py-2  glass btn text-white rounded-lg  hover:bg-blue-950 transition my-4">
                  Live Demo
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
      {/* Project -2 */}
      <div className="hero bg-black min-h-screen pb-4">
        <div className="hero-content flex-col lg:flex-row gap-10 items-start justify-start">
          <div className="text-left">
            <h3 className="text-white text-xl font-semibold mt-3 lg:mx-auto lg:w-8/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="text-white mt-3 lg:mx-auto lg:w-8/12">
              I’m Faisal Ahammed, a passionate MERN Stack Developer with
              expertise in building dynamic and scalable web applications. I
              have a deep interest in modern web technologies and love crafting
              efficient, high-performing applications. With hands-on experience
              in React, Node.js, Express, and MongoDB, I specialize in creating
              full-stack solutions that are both user-friendly and robust. I am
              always eager to learn new technologies and improve my development
              skills. Over the years, I have worked on various projects ranging
              from e-commerce platforms, admin dashboards, and content
              management systems to real-time applications. I always strive to
              write clean, maintainable, and optimized code while focusing on
              delivering seamless user experiences.
              <br />
              <div className=" flex justify-center">
                <button className="px-4 py-2  glass btn text-white rounded-lg  hover:bg-blue-950  transition my-4">
                  Live Demo
                </button>
              </div>
            </p>
          </div>
          <div className="relative w-full sm:w-11/12 lg:w-auto">
            <div className="hidden lg:block lg:absolute top-8 right-16 border-8 border-gray-300 w-full h-full rounded-xl"></div>
            <img
              src={img}
              className="max-w-sm rounded-lg shadow-2xl w-11/12 lg:w-auto lg:relative"
            />
          </div>
        </div>
      </div>
      {/* Project -3 */}
      <div className="hero bg-black min-h-screen pb-4">
        <div className="hero-content flex-col lg:flex-row gap-10 items-start justify-start">
          <div className="relative w-full sm:w-11/12 lg:w-auto">
            <div className="hidden lg:block lg:absolute top-8 left-16 border-8 border-gray-300 w-full h-full rounded-xl"></div>
            <img
              src={img}
              className="max-w-sm rounded-lg shadow-2xl w-11/12 lg:w-auto lg:relative"
            />
          </div>
          <div className="text-left">
            <h3 className="text-white text-xl font-semibold mt-3 lg:mx-auto lg:w-8/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="text-white mt-3 lg:mx-auto lg:w-8/12">
              I’m Faisal Ahammed, a passionate MERN Stack Developer with
              expertise in building dynamic and scalable web applications. I
              have a deep interest in modern web technologies and love crafting
              efficient, high-performing applications. With hands-on experience
              in React, Node.js, Express, and MongoDB, I specialize in creating
              full-stack solutions that are both user-friendly and robust. I am
              always eager to learn new technologies and improve my development
              skills. Over the years, I have worked on various projects ranging
              from e-commerce platforms, admin dashboards, and content
              management systems to real-time applications. I always strive to
              write clean, maintainable, and optimized code while focusing on
              delivering seamless user experiences.
              <br />
              <div className=" flex justify-center">
                <button className="px-4 py-2 glass btn text-white rounded-lg  hover:bg-blue-950  transition my-4">
                  Live Demo
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
