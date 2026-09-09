import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const ProjectOne = () => {
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
                     hover:text-blue-400
                     hover:border-blue-500/30
                     hover:bg-blue-500/[0.05]
                     transition-all duration-300"
        >
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <p className="text-blue-400 uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Featured Project
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📦 GoParcel
          </h1>

          <p className="text-gray-400 max-w-3xl leading-7">
            A full-stack parcel delivery management platform built with the
            MERN Stack. Users can create parcel bookings, track deliveries,
            make payments, and manage orders through dedicated dashboards.
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-14">
          <img
            src="https://i.ibb.co.com/8gN2XcKF/bf20c52a-a9a2-48d5-afc7-b31ae9a8ea2c.png"
            alt="GoParcel"
            className="w-full rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>

        <div className="space-y-14">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-5">
              Project Overview
            </h2>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <p className="text-gray-400 leading-8">
                GoParcel is a modern parcel delivery platform designed to
                simplify courier operations. The application supports users,
                riders, and administrators through dedicated dashboards,
                parcel tracking, payment processing, and delivery management
                workflows.
              </p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-5">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Parcel Booking & Management",
                "Real-time Parcel Tracking",
                "Rider Assignment Workflow",
                "Stripe Payment Integration",
                "Role-based Dashboard",
                "Admin Analytics & Reports",
              ].map((feature) => (
                <div
                  key={feature}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-4 hover:border-blue-500/30 transition-all duration-300"
                >
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-5">
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
                "Stripe",
                "JWT",
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
            <h2 className="text-2xl font-semibold text-blue-400 mb-5">
              Demo Credentials
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {/* Admin */}
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-6">
                <h3 className="text-blue-400 font-semibold text-lg mb-4">
                  Admin Account
                </h3>

                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-gray-500">Email:</span>{" "}
                    admin@gmail.com
                  </p>

                  <p>
                    <span className="text-gray-500">Password:</span>{" "}
                    12345678
                  </p>
                </div>
              </div>

              {/* Rider */}
              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/[0.05] p-6">
                <h3 className="text-purple-400 font-semibold text-lg mb-4">
                  Rider Account
                </h3>

                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-gray-500">Email:</span>{" "}
                    rider@gmail.com
                  </p>

                  <p>
                    <span className="text-gray-500">Password:</span>{" "}
                    12345678
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Stripe Cards */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-5">
              Stripe Test Cards
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
              <table className="table">
                <thead>
                  <tr className="text-blue-400">
                    <th>Card Type</th>
                    <th>Card Number</th>
                    <th>CVC</th>
                    <th>Expiry Date</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Visa</td>
                    <td>4242 4242 4242 4242</td>
                    <td>Any 3 digits</td>
                    <td>Any future date</td>
                  </tr>

                  <tr>
                    <td>Mastercard</td>
                    <td>5555 5555 5555 4444</td>
                    <td>Any 3 digits</td>
                    <td>Any future date</td>
                  </tr>

                  <tr>
                    <td>American Express</td>
                    <td>3782 822463 10005</td>
                    <td>Any 4 digits</td>
                    <td>Any future date</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectOne;