import { FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import img from "../../Image/Ahammed.jpg";

const About = () => {
  return (
    <div className="hero bg-black min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10 items-start justify-start">
        <img src={img} className="max-w-sm rounded-lg size-11/12 shadow-2xl" />
        <div className="text-left">
          <h1 className="text-3xl font-bold text-center text-white">
            About Me
          </h1>
          <p className="text-white mt-3 lg:mx-auto lg:w-8/12">
            I’m Faisal Ahammed, a passionate MERN Stack Developer with expertise
            in building dynamic and scalable web applications. I have a deep
            interest in modern web technologies and love crafting efficient,
            high-performing applications. With hands-on experience in React,
            Node.js, Express, and MongoDB, I specialize in creating full-stack
            solutions that are both user-friendly and robust. I am always eager
            to learn new technologies and improve my development skills. Over
            the years, I have worked on various projects ranging from e-commerce
            platforms, admin dashboards, and content management systems to
            real-time applications. I always strive to write clean,
            maintainable, and optimized code while focusing on delivering
            seamless user experiences.
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <button className="btn glass mt-3 text-white uppercase rounded-full text-xl font-bold">
              <FaLinkedin></FaLinkedin>
            </button>
            <button className="btn glass mt-3 text-white uppercase rounded-full text-xl font-bold">
              <FaX></FaX>
            </button>
            <button className="btn glass mt-3 text-white uppercase rounded-full text-xl font-bold">
              <FaGithub></FaGithub>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
