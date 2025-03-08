import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <section className="mb-2">
      <h1 className="text-3xl bg-[#121212] font-bold text-center my-4 text-white uppercase">
        Project
      </h1>

      {/* Project -1 */}
      <div className="hero bg-[#121212]  min-h-screen pb-4">
        <div className="hero-content flex-col lg:flex-row gap-10 items-start justify-start">
          <div className="relative w-full md:justify-center md:flex sm:w-11/12 lg:w-auto">
            <div className="hidden lg:block lg:absolute top-8 left-16 border-8 border-white  w-full h-full rounded-xl"></div>
            <img
              src="https://i.ibb.co.com/B2FFntV5/Blood-Donation-02-10-2025-08-26-PM.png"
              className="max-w-sm  rounded-lg shadow-2xl w-11/12 lg:w-auto lg:relative"
            />
          </div>
          <div className="text-left">
            <div className="bg-[#121212] min-h-screen pb-4 px-6 flex flex-col items-center text-center">
              <h3 className="text-white text-lg font-semibold my-2">
                🚀 Used Technologies
              </h3>
              <div className="grid grid-cols-4 gap-2 my-4 text-white text-sm">
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  React.js
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">Stripe</span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  TanStack Query
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">JWT</span>
              </div>
              <div className="bg-[#121212] p-6 rounded-xl shadow-lg max-w-2xl w-full">
                <h3 className="text-white text-2xl font-bold">
                  🩸 Blood Donation Web Application
                </h3>
                <p className="text-gray-300 mt-3 text-sm">
                  This is a Blood Donation website that I have created. It is an
                  advanced platform that offers multiple features for donors,
                  volunteers, and admins. Users can easily make blood donation
                  requests, manage donors, access dashboards, and utilize
                  content management and funding systems. The website is fully
                  responsive and designed with a user-friendly interface. It
                  provides seamless navigation with role-based access control,
                  ensuring that all users, regardless of their device or screen
                  size, can access the website with ease. Whether on mobile,
                  tablet, or desktop, the Blood Donation website remains fully
                  functional and visually appealing.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://github.com/faisalahammed01/blood-donation-client"
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
                  >
                    Client
                  </a>
                  <a
                    href="https://github.com/faisalahammed01/blood-donation-server"
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
                  >
                    Server
                  </a>
                  <a
                    href=" https://blood-donation-69994.web.app/"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400"
                  >
                    Live Site
                  </a>
                  <Link
                    to="Project-1"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project -2 */}
      <div className="hero bg-[#121212]  min-h-screen pb-4">
        <div className="hero-content flex-col lg:flex-row gap-10 items-start justify-start">
          <div className="text-left">
            <div className="bg-[#121212] min-h-screen pb-4 px-6 flex flex-col items-center text-center">
              <h3 className="text-white text-lg font-semibold my-2">
                🚀 Used Technologies
              </h3>
              <div className="grid grid-cols-4 gap-2 my-4 text-white text-sm">
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  React.js
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  Framer Motion
                </span>
              </div>
              <div className="bg-[#121212] p-6 rounded-xl shadow-lg max-w-2xl w-full">
                <h3 className="text-white text-2xl font-bold">
                  🔍 Lost and Found Web Application
                </h3>
                <p className="text-gray-300 mt-3 text-sm">
                  This is a Lost and Found website that I have created. It is an
                  advanced platform that offers multiple features for users to
                  report, search, and claim lost or found items. Users can
                  easily submit lost item reports, manage found items, access
                  dashboards, and utilize a secure verification system. The
                  website is fully responsive and designed with a user-friendly
                  interface. It provides seamless navigation with role-based
                  access control, ensuring that all users, regardless of their
                  device or screen size, can access the website with ease.
                  Whether on mobile, tablet, or desktop, the Lost and Found
                  website remains fully functional and visually appealing.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://github.com/faisalahammed01/lost-found-client"
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
                  >
                    Client
                  </a>
                  <a
                    href="https://github.com/faisalahammed01/lost-and-found-server"
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
                  >
                    Server
                  </a>
                  <a
                    href="https://lost-found-9fc15.web.app/"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400"
                  >
                    Live Site
                  </a>
                  <Link
                    to="Project-2"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full md:justify-center md:flex sm:w-11/12 lg:w-auto">
            <div className="hidden lg:block lg:absolute top-8 right-16 border-8 border-white w-full h-full rounded-xl"></div>
            <img
              src="https://i.ibb.co.com/rf6fcGB9/lost-and-found.png"
              className="max-w-sm rounded-lg shadow-2xl  w-11/12 lg:w-auto  lg:relative"
            />
          </div>
        </div>
      </div>
      {/* Project -3 */}
      <div className="hero bg-[#121212]  min-h-screen pb-4">
        <div className="hero-content flex-col lg:flex-row gap-10 items-start justify-start">
          <div className="relative w-full md:justify-center md:flex sm:w-11/12 lg:w-auto">
            <div className="hidden lg:block lg:absolute top-8 left-16 border-8 border-white w-full h-full rounded-xl"></div>
            <img
              src="https://i.ibb.co.com/v87C9HT/Winter-Donation-02-10-2025-08-57-PM.png"
              className="max-w-sm rounded-lg shadow-2xl w-11/12 lg:w-auto lg:relative"
            />
          </div>
          <div className="text-left">
            <div className="bg-[#121212] min-h-screen pb-4 px-6 flex flex-col items-center text-center">
              <h3 className="text-white text-lg font-semibold my-2">
                🚀 Used Technologies
              </h3>
              <div className="grid grid-cols-4 gap-2 my-4 text-white text-sm">
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  React.js
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg">
                  MongoDB
                </span>
              </div>
              <div className="bg-[#121212] p-6 rounded-xl shadow-lg max-w-2xl w-full">
                <h3 className="text-white text-2xl font-bold">
                  👔 Winter Clothing Donation Web Application
                </h3>
                <p className="text-gray-300 mt-3 text-sm">
                  This is a Winter Clothing Donation website that I have
                  created. It is an advanced platform that offers multiple
                  features for donors, volunteers, and admins. Users can easily
                  donate winter clothes, manage contributions, access
                  dashboards, and utilize content management and funding
                  systems. The website is fully responsive and designed with a
                  user-friendlyplatform ensures that all users, regardless of
                  their device or screen size, can access the website with ease.
                  Whether on mobile, tablet, or desktop, the Winter Clothing
                  Donation website remains fully functional and visually
                  appealing.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://github.com/faisalahammed01/clothing-donation-react"
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
                  >
                    Client
                  </a>

                  <a
                    href="https://winter-clothing-donation-69ebf.web.app/"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400"
                  >
                    Live Site
                  </a>
                  <Link
                    to="Project-3"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
