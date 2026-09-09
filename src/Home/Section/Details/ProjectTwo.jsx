import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const ProjectTwo = () => {
  return (
    <section className="min-h-screen bg-[#0b0f14] text-white py-20 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 mb-10 px-5 py-3
                     rounded-xl border border-white/10
                     bg-white/[0.03]
                     text-gray-300 font-medium
                     hover:text-red-400
                     hover:border-red-500/30
                     hover:bg-red-500/[0.05]
                     transition-all duration-300"
        >
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <p className="text-red-400 uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Featured Project
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🩸 Blood Donation
          </h1>

          <p className="text-gray-400 max-w-3xl leading-7">
            A blood donation management platform that connects donors with
            people in need while providing an easy and efficient way to manage
            donation requests through a secure and user-friendly system.
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-14">
          <img
            src="https://i.ibb.co.com/7NZxZ6HN/Blood.png"
            alt="Blood Donation"
            className="w-full rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>

        <div className="space-y-14">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-red-400 mb-5">
              Project Overview
            </h2>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <p className="text-gray-400 leading-8">
                This platform helps users find blood donors based on blood
                group and location. It provides donor management, blood
                donation requests, volunteer management, and secure dashboard
                functionality for better coordination between donors and
                recipients.
              </p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-semibold text-red-400 mb-5">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Donor Search by District & Blood Group",
                "Blood Donation Request Management",
                "Role-based Dashboard",
                "Volunteer Management System",
                "Authentication & Authorization",
                "Responsive User Interface",
              ].map((feature) => (
                <div
                  key={feature}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-4 hover:border-red-500/30 transition-all duration-300"
                >
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-semibold text-red-400 mb-5">
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Tailwind CSS",
                "Firebase",
                "Node.js",
                "Express.js",
                "MongoDB",
                "TanStack Query",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Demo Credentials */}
          <div>
            <h2 className="text-2xl font-semibold text-red-400 mb-5">
              Demo Credentials
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {/* Admin */}
              <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.05] p-6">
                <h3 className="text-red-400 font-semibold text-lg mb-4">
                  🔑 Admin Login
                </h3>

                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-gray-500">Email:</span>{" "}
                    admin1@gmail.com
                  </p>

                  <p>
                    <span className="text-gray-500">Password:</span>{" "}
                    12345678
                  </p>
                </div>
              </div>

              {/* Volunteer */}
              <div className="rounded-2xl border border-pink-500/20 bg-pink-500/[0.05] p-6">
                <h3 className="text-pink-400 font-semibold text-lg mb-4">
                  👤 Volunteer Login
                </h3>

                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-gray-500">Email:</span>{" "}
                    volunteer@gmail.com
                  </p>

                  <p>
                    <span className="text-gray-500">Password:</span>{" "}
                    12345678
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectTwo;