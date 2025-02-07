import { NavLink } from "react-router-dom";

const Nav = () => {
  const link = (
    <>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/skills">SKILLS</NavLink>
      <NavLink to="/education">EDUCATION</NavLink>
      <NavLink to="/project">PROJECTS</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black fix bg-opacity-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">F</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white gap-3">{link}</ul>
        </div>
        <div className="navbar-end text-white">
          <a className="">RESUME</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
