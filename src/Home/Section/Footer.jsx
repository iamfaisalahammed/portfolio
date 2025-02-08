import { FaGithub, FaX } from "react-icons/fa6";
import img from "../../Image/Picsart_icon.png";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer bg- text-neutral-content items-center p-4 bg-[#212122] backdrop-blur-md border-t border-white/20">
      <aside className="grid-flow-col items-center">
        <img className="size-5" src={img} alt="" />
        <p>© {new Date().getFullYear()} - Faisal Ahammed</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.facebook.com/faisalahammed00" target="_blank">
          <FaFacebook></FaFacebook>
        </a>
        <a href="">
          <FaX></FaX>
        </a>
        <a>
          <FaGithub></FaGithub>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
