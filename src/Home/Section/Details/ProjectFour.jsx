import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaGithub,
  FaRobot,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const ProjectFour = () => {
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

        {/* Heading */}
        <div className="mb-12">
          <p className="text-blue-400 text-sm uppercase tracking-[0.25em] mb-3">
            Featured Project
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🤖 JARVIS AI Assistant
          </h1>

          <p className="text-gray-400 max-w-3xl leading-7">
            A modern AI assistant built with React, Express, and Google Gemini.
            Users can interact with the assistant through a clean and futuristic
            chat interface and receive intelligent responses in real time.
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <img
            src="https://i.ibb.co.com/n8cL9Z1s/jarvis.png"
            alt="JARVIS AI Assistant"
            className="w-full rounded-2xl border border-white/10 shadow-xl"
          />
        </div>

        {/* Overview */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Project Overview
          </h3>

          <p className="text-gray-400 leading-8">
            JARVIS is a personal AI assistant designed to provide intelligent
            conversational experiences using Google Gemini. The application
            features a modern user interface, real-time response generation,
            and a custom personality inspired by the JARVIS concept.
          </p>
        </div>

        {/* Features */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Key Features
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "AI Powered Chat Assistant",
              "Google Gemini Integration",
              "Real-time Response Generation",
              "Modern Responsive Interface",
              "Custom System Instructions",
              "Mobile Friendly Design",
            ].map((feature) => (
              <div
                key={feature}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10"
              >
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Technologies Used
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "Google Gemini",
              "REST API",
              "JavaScript",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/[0.04]
                border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Challenges & Solutions
          </h3>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 leading-8">
              One of the biggest challenges was integrating the Gemini API
              while maintaining a smooth and responsive user experience.
              To solve this, a dedicated Express backend was created to
              securely handle AI requests and efficiently deliver responses
              to the frontend.
            </p>
          </div>
        </div>

        {/* Future Improvements */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Future Improvements
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Voice Interaction",
              "Chat History",
              "User Authentication",
              "Theme Customization",
              "File Upload Support",
              "Multi-language Responses",
            ].map((item) => (
              <div
                key={item}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10"
              >
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Project Highlights
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <FaRobot className="mx-auto text-blue-400 text-3xl mb-3" />
              <h4 className="font-semibold">AI Powered</h4>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <FaCode className="mx-auto text-blue-400 text-3xl mb-3" />
              <h4 className="font-semibold">Full Stack</h4>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <FaRocket className="mx-auto text-blue-400 text-3xl mb-3" />
              <h4 className="font-semibold">Responsive UI</h4>
            </div>
          </div>
        </div>

        {/* Project Links */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Project Links
          </h3>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/iamfaisalahammed/chat-bot"
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
              href="https://github.com/iamfaisalahammed/jarvis-server"
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
              href="https://jarvis-faisal-ahammeds-projects.vercel.app/"
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
    </section>
  );
};

export default ProjectFour;