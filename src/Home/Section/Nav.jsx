import { IoMdDownload } from "react-icons/io";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import img from "../../Image/Picsart_icon.png";

const Nav = () => {
  const link = (
    <>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-gray-300"
      >
        HOME
      </Link>
      <Link
        to="about-section"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-gray-300"
      >
        ABOUT
      </Link>
      <NavLink to="/skills" className="hover:text-gray-300">
        SKILLS
      </NavLink>
      <NavLink to="/education" className="hover:text-gray-300">
        EDUCATION
      </NavLink>
      <NavLink to="/project" className="hover:text-gray-300">
        PROJECTS
      </NavLink>
      <NavLink to="/contact" className="hover:text-gray-300">
        CONTACT
      </NavLink>
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
              className="menu menu-sm dropdown-content bg-white/10 backdrop-blur-lg text-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-white/20"
            >
              {link}
            </ul>
          </div>
          <a className="text-xl text-white font-bold flex items-center justify-center gap-2">
            <img className="size-8" src={img} alt="" />
            Faisal Ahammed
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
