import { useState, useEffect } from "react";
import img from "../../Image/faisal-ahammed.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const AnimatedText = () => {
  const name = "Faisal Ahammed";

  const [displayText, setDisplayText] = useState("F");
  const [index, setIndex] = useState(1);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isReversing) {
        if (index <= name.length) {
          setDisplayText(name.substring(0, index));
          setIndex(index + 1);
        } else {
          setIsReversing(true);
        }
      } else {
        if (index > 1) {
          setDisplayText(name.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsReversing(false);
        }
      }
    }, 180);

    return () => clearTimeout(timeout);
  }, [index, isReversing]);

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
      {displayText}
      <span className="text-blue-500 animate-pulse">|</span>
    </h1>
  );
};

// Banner Component
const Banner = () => {
  return (
    <section className="min-h-screen bg-[#0b0f14] text-white flex items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-20">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-blue-400 text-sm sm:text-base font-semibold uppercase tracking-[0.25em] mb-4">
              Welcome to my portfolio
            </p>

            <p className="text-gray-300 text-lg mb-2">
              Hello, I am
            </p>

            <div className="min-h-[60px] sm:min-h-[70px] flex justify-center lg:justify-start">
              <AnimatedText />
            </div>

            <div className="mt-5">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200">
                Full Stack Developer
              </h2>

              <div className="w-20 h-1 bg-blue-500 rounded-full mt-4 mx-auto lg:mx-0"></div>
            </div>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              I am a passionate web developer with a keen interest in exploring
              and mastering new technologies. I enjoy building modern,
              responsive, and user-friendly web applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 shadow-lg shadow-blue-600/20"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-gray-600 hover:border-blue-500 hover:text-blue-400 text-gray-200 font-semibold transition duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mt-8">
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
                href="https://www.facebook.com/iamFaisalAhammed/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700 bg-white/5 text-gray-300 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 transition duration-300"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="https://github.com/iamfaisalahammed"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700 bg-white/5 text-gray-300 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 transition duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">

              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-110"></div>

              {/* Image Border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700 shadow-2xl shadow-blue-500/20">

                <div className="w-full h-full rounded-full bg-[#0b0f14] p-2">
                  <img
                    src={img}
                    alt="Faisal Ahammed"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

              </div>

              {/* Small Status Badge */}
              <div className="absolute bottom-5 right-2 sm:right-0 bg-[#111820] border border-gray-700 px-4 py-2 rounded-full shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <span className="text-sm text-gray-300">
                    Available
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;