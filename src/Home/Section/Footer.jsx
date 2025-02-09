import { FaX } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer bg- text-neutral-content items-center p-4 bg-[#212122] backdrop-blur-md border-t border-white/20">
      <aside className="grid-flow-col items-center">
        <p className="text-xl">© {new Date().getFullYear()} - Faisal Ahammed</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.facebook.com/faisalahammed00"
          className="bg-white/20 p-4 rounded-xl shadow-md backdrop-blur-sm animate-pulse"
        >
          <a className="">
            <FaFacebook className="text-blue-400 hover:text-white  text-xl"></FaFacebook>
          </a>
        </a>
        <a
          href=""
          className="bg-white/20   p-4 rounded-xl shadow-md backdrop-blur-sm  animate-pulse"
        >
          <a>
            <FaX className="text-blue-400 text-xl hover:text-white"></FaX>
          </a>
        </a>

        <a
          href=""
          className="bg-white/20 p-4 rounded-xl shadow-md backdrop-blur-sm animate-pulse"
        >
          <a>
            <FaLinkedin className="text-blue-400 hover:text-white text-xl"></FaLinkedin>
          </a>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
