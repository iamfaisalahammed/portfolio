
import { FaX } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
        
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm sm:text-base text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
              Faisal Ahammed
            </span>
            . All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <nav className="flex items-center gap-3">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/iamfaisalahammed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-11 h-11 flex items-center justify-center rounded-xl
                       bg-white/[0.04] border border-white/10
                       text-gray-400
                       hover:text-blue-400 hover:border-blue-500/40
                       hover:bg-blue-500/10
                       transition-all duration-300"
          >
            <FaFacebook className="text-xl" />
          </a>

          {/* X */}
          <a
            href="https://x.com/faisalAhammed_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="w-11 h-11 flex items-center justify-center rounded-xl
                       bg-white/[0.04] border border-white/10
                       text-gray-400
                       hover:text-white hover:border-white/30
                       hover:bg-white/10
                       transition-all duration-300"
          >
            <FaX className="text-lg" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/faisalahammed/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 flex items-center justify-center rounded-xl
                       bg-white/[0.04] border border-white/10
                       text-gray-400
                       hover:text-blue-400 hover:border-blue-500/40
                       hover:bg-blue-500/10
                       transition-all duration-300"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </nav>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/5">
        <p className="text-center text-xs text-gray-600 py-4">
          Crafted with React by Faisal Ahammed
        </p>
      </div>
    </footer>
  );
};

export default Footer;

