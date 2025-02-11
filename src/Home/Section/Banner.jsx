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
          setDisplayText(name.substring(0, index));
          setIndex(index - 1);
        } else {
          setIsReversing(false);
        }
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [index, isReversing]);

  return <h1 className="text-3xl font-bold text-white">{displayText}</h1>;
};

// Banner Component
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#121212]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm size-72 rounded-full shadow-2xl" />
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-xl border border-white/20">
            <h3 className="text-white">Hello, I am</h3>
            <AnimatedText />
            <p className="py-2 text-lg text-white uppercase">
              Full Stack Developer
            </p>
            <p className="text-gray-300">
              I am a passionate web developer with a keen interest in exploring
              and mastering new technologies.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href=""
                className="btn glass mt-3 text-white uppercase hover:bg-blue-950 rounded-full text-xl font-bold shadow-lg shadow-blue-500 animate-bounce1"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/FaisalAhammed00/"
                className="btn glass mt-3 text-white uppercase hover:bg-blue-950 rounded-full text-xl font-bold shadow-lg shadow-blue-500 animate-bounce2"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/faisal-devs"
                className="btn glass mt-3 text-white uppercase hover:bg-blue-950 rounded-full text-xl font-bold shadow-lg shadow-blue-500 animate-bounce3"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
