
import { FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import img from "../../Image/Ahammed.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0b0f14] text-white py-20 px-6 lg:px-12 overflow-hidden"
    >
      <div className="container mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Get to know me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-110"></div>

              {/* Image Frame */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl p-1 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700 shadow-2xl shadow-blue-500/10">

                <div className="w-full h-full bg-[#111820] rounded-2xl p-2">
                  <img
                    src={img}
                    alt="Faisal Ahammed"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-5 -right-4 sm:-right-8 bg-[#111820] border border-gray-700 rounded-xl px-5 py-4 shadow-xl">
                <p className="text-2xl font-bold text-blue-400">
                  MERN
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Stack Developer
                </p>
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12">

            <h3 className="text-2xl sm:text-3xl font-bold mb-5">
              Hi, I'm{" "}
              <span className="text-blue-500">
                Faisal Ahammed
              </span>
            </h3>

            <p className="text-gray-400 text-base sm:text-lg leading-8">
              I’m a passionate MERN Stack Developer with a strong interest in
              building modern, scalable, and user-friendly web applications.
              I enjoy turning ideas into functional digital experiences with
              clean and maintainable code.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-8 mt-5">
              I work with technologies such as React, Node.js, Express, and
              MongoDB to create full-stack applications. I’m continuously
              exploring new technologies and improving my development skills
              to build better and more efficient solutions.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              <div className="border border-gray-700 bg-white/5 rounded-lg px-4 py-3 text-center hover:border-blue-500 transition duration-300">
                <p className="font-semibold text-gray-200">React</p>
              </div>

              <div className="border border-gray-700 bg-white/5 rounded-lg px-4 py-3 text-center hover:border-blue-500 transition duration-300">
                <p className="font-semibold text-gray-200">Node.js</p>
              </div>

              <div className="border border-gray-700 bg-white/5 rounded-lg px-4 py-3 text-center hover:border-blue-500 transition duration-300">
                <p className="font-semibold text-gray-200">Express</p>
              </div>

              <div className="border border-gray-700 bg-white/5 rounded-lg px-4 py-3 text-center hover:border-blue-500 transition duration-300">
                <p className="font-semibold text-gray-200">MongoDB</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-9">

              <a
                href="https://www.linkedin.com/in/faisalahammed/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700 bg-white/5 text-gray-300 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://x.com/faisalahammed02"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700 bg-white/5 text-gray-300 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 transition duration-300"
              >
                <FaX size={19} />
              </a>

              <a
                href="https://github.com/faisalahammed01"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700 bg-white/5 text-gray-300 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 transition duration-300"
              >
                <FaGithub size={20} />
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

