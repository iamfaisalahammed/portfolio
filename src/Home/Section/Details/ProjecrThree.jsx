import { Link } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaSearch } from "react-icons/fa";

const ProjectThree = () => {
  return (
    <section className="min-h-screen bg-[#0b0f14] text-white py-20 px-5">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl
          bg-white/[0.04] border border-white/10 text-gray-300
          hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10
          transition-all duration-300"
        >
          <FaArrowLeft />
          Back to Portfolio
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🔍 Lost & Found
        </h1>

        <p className="text-gray-400 mb-10 text-lg">
          A web application designed to help users report, search, and recover
          lost items efficiently through a modern and user-friendly interface.
        </p>

        {/* Project Image */}
        <img
          src="https://i.ibb.co.com/xqRykz7f/lost-and-found.png"
          alt="Lost and Found"
          className="rounded-2xl border border-white/10 mb-10 w-full shadow-xl"
        />

        <div className="space-y-10">

          {/* Overview */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Project Overview
            </h3>

            <p className="text-gray-400 leading-8">
              Lost & Found provides a centralized platform where users can post
              lost items, publish found items, and communicate securely through
              authenticated accounts. The platform helps increase the chances of
              recovering lost belongings while maintaining a simple and
              responsive user experience.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Key Features
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Lost Item Reporting System",
                "Found Item Publishing",
                "Authentication & Authorization",
                "CRUD Operations",
                "Search & Filter Functionality",
                "Responsive Design",
              ].map((feature) => (
                <div
                  key={feature}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10"
                >
                  <span className="text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Tailwind CSS",
                "Firebase",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl
                  bg-white/[0.04]
                  border border-white/10
                  text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          

          {/* Project Links */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Project Links
            </h3>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/iamfaisalahammed/lost-found-client"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/[0.04]
                border border-white/10 hover:bg-white/[0.08]
                transition-all duration-300 flex items-center gap-2"
              >
                <FaGithub />
                Client Repository
              </a>

              <a
                href="https://github.com/iamfaisalahammed/lost-and-found-server"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/[0.04]
                border border-white/10 hover:bg-white/[0.08]
                transition-all duration-300 flex items-center gap-2"
              >
                <FaGithub />
                Server Repository
              </a>

              <a
                href="https://lost-found-9fc15.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-blue-500
                hover:bg-blue-400 transition-all duration-300"
              >
                Live Website →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectThree;