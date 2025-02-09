import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import img from "../../Image/faisal-devs.jpg";

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

const HireMeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-gray-300/20 shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Hire Me</h2>
          <button onClick={onClose} className="text-gray-300 hover:text-white">
            <FaTimes />
          </button>
        </div>
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full mb-2 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full mb-2 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered w-full bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="btn btn-outline border-gray-300 text-white hover:border-white mr-2"
          >
            Cancel
          </button>
          <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Banner Component
const Banner = () => {
  const [open, setOpen] = useState(false);

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
            <button
              onClick={() => setOpen(true)}
              className="btn glass mt-3 text-black uppercase font-bold"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* Hire Me Modal */}
      <HireMeModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Banner;
