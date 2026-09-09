import { IoMdDownload } from "react-icons/io";
import { Link } from "react-scroll";

const Nav = () => {
  const linkClass =
    "cursor-pointer font-medium text-gray-300 hover:text-blue-400 transition duration-300";

  const mobileLinkClass =
    "cursor-pointer font-medium text-gray-300 hover:text-blue-400 transition duration-300 py-2";

  const links = (
    <>
      <Link to="home" smooth={true} duration={500} className={linkClass}>
        HOME
      </Link>

      <Link to="about" smooth={true} duration={500} className={linkClass}>
        ABOUT
      </Link>

      <Link to="skills" smooth={true} duration={500} className={linkClass}>
        SKILLS
      </Link>

      <Link to="education" smooth={true} duration={500} className={linkClass}>
        EDUCATION
      </Link>

      <Link to="project" smooth={true} duration={500} className={linkClass}>
        PROJECTS
      </Link>

      <Link to="contact" smooth={true} duration={500} className={linkClass}>
        CONTACT
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f14]/85 backdrop-blur-xl border-b border-gray-800/80">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70px]">

        {/* Logo + Mobile Menu */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-gray-300 hover:text-white hover:bg-white/5 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-56 p-4 gap-2 rounded-xl bg-[#11161d] border border-gray-800 shadow-2xl"
            >
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={mobileLinkClass}
              >
                HOME
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={500}
                className={mobileLinkClass}
              >
                ABOUT
              </Link>

              <Link
                to="skills"
                smooth={true}
                duration={500}
                className={mobileLinkClass}
              >
                SKILLS
              </Link>

              <Link
                to="education"
                smooth={true}
                duration={500}
                className={mobileLinkClass}
              >
                EDUCATION
              </Link>

              <Link
                to="project"
                smooth={true}
                duration={500}
                className={mobileLinkClass}
              >
                PROJECTS
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={mobileLinkClass}
              >
                CONTACT
              </Link>
            </ul>
          </div>

          {/* Text Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <h2 className="text-xl md:text-2xl font-extrabold tracking-wider">
              <span className="text-white">FAISAL</span>
              <span className="text-blue-500">.</span>
            </h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8">
            {links}
          </ul>
        </div>

        {/* Resume Button */}
        <div className="navbar-end">
          <a
            href="/Resume (faisal).pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition duration-300 font-semibold text-sm"
          >
            <span className="hidden sm:inline">RESUME</span>
            <IoMdDownload size={19} />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Nav;