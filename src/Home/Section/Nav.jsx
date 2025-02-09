import { IoMdDownload } from "react-icons/io";
import { Link } from "react-scroll";
import img from "../../Image/icon/Picsart_25-02-09_05-12-57-291.png";

const Nav = () => {
  const link = (
    <>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer font-semibold hover:text-gray-300"
      >
        HOME
      </Link>
      <Link
        to="about-section"
        smooth={true}
        duration={500}
        className="cursor-pointer font-semibold hover:text-gray-300"
      >
        ABOUT
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        className="cursor-pointer font-semibold hover:text-gray-300"
      >
        SKILLS
      </Link>
      <Link
        to="education"
        smooth={true}
        duration={500}
        className="cursor-pointer font-semibold hover:text-gray-300"
      >
        EDUCATION
      </Link>
      <Link
        to="project"
        smooth={true}
        duration={500}
        className="cursor-pointer font-semibold hover:text-gray-300"
      >
        PROJECTS
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer font-semibold hover:text-gray-300"
      >
        CONTACT
      </Link>
    </>
  );

  return (
    <div>
      {/* Navbar */}
      <div className="navbar fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content gap-y-3 bg-white/10 backdrop-blur-lg text-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-white/20"
            >
              {link}
            </ul>
          </div>
          <a className="text-xl text-white font-bold flex items-center justify-center gap-2">
            <img className="size-8 w-full" src={img} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white gap-6">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="text-white font-medium hover:text-gray-300 flex items-center gap-2">
            RESUME <IoMdDownload></IoMdDownload>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
