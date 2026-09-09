import { Link } from "react-router-dom";

const projects = [
  {
    title: "GoParcel",
    icon: "📦",
    image:
      "https://i.ibb.co.com/8gN2XcKF/bf20c52a-a9a2-48d5-afc7-b31ae9a8ea2c.png",
    description:
      "A full-stack parcel delivery platform with user, rider, and admin features. Includes parcel management, delivery tracking, role-based dashboards, and Stripe payment integration.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Stripe",
      "TanStack Query",
      "JWT",
    ],
    client: "https://github.com/iamfaisalahammed/bahon",
    server: "https://github.com/iamfaisalahammed/GoParcel-Server",
    live: "https://goparcel-aea49.web.app",
    details: "Project-1",
    imagePosition: "left",
  },

  {
    title: "Blood Donation",
    icon: "🩸",
    image: "https://i.ibb.co.com/7NZxZ6HN/Blood.png",
    description:
      "A responsive blood donation platform where users can search donors, manage donation requests, and access role-based dashboards for better donor management.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Express.js",
      "MongoDB",
      "TanStack Query",
    ],
    client: "https://github.com/iamfaisalahammed/blood-donation-client",
    server: "https://github.com/iamfaisalahammed/blood-donation-server",
    live: "https://blood-donation-69994.web.app",
    details: "Project-2",
    imagePosition: "right",
  },

  {
    title: "Lost & Found",
    icon: "🔍",
    image: "https://i.ibb.co.com/xqRykz7f/lost-and-found.png",
    description:
      "A web application for reporting, searching, and managing lost and found items with secure user authentication and a responsive interface.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Framer Motion",
    ],
    client: "https://github.com/iamfaisalahammed/lost-found-client",
    server: "https://github.com/iamfaisalahammed/lost-and-found-server",
    live: "https://lost-found-9fc15.web.app/",
    details: "Project-3",
    imagePosition: "left",
  },

  {
    title: "JARVIS AI Assistant",
    icon: "🤖",
    image: "https://i.ibb.co.com/n8cL9Z1s/jarvis.png",
    description:
      "A personal AI assistant built with React and Express, powered by Google Gemini to provide intelligent conversational responses through a clean and futuristic interface.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "Google Gemini",
      "REST API",
    ],
    client: "https://github.com/iamfaisalahammed/jarvis-server",
    server: "https://github.com/iamfaisalahammed/jarvis-server",
    live: "https://jarvis-faisal-ahammeds-projects.vercel.app/",
    details: "Project-4",
    imagePosition: "right",
  },
];

const ProjectCard = ({ project, index }) => {
  const isImageLeft = project.imagePosition === "left";

  return (
    <article className="group relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Project Image */}
      <div className={`relative ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
        {/* Background glow */}
        <div className="absolute -inset-6 bg-blue-500/[0.04] blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Image Frame */}
        <div className="relative">
          {/* Decorative frame */}
          <div
            className={`hidden lg:block absolute inset-0 rounded-2xl border border-blue-500/10 translate-x-4 translate-y-4 transition-all duration-500 group-hover:translate-x-5 group-hover:translate-y-5 group-hover:border-blue-500/30 ${
              isImageLeft ? "translate-x-5" : "-translate-x-5"
            }`}
          />

          {/* Image Card */}
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-[#11161d] shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14]/50 via-transparent to-transparent opacity-70" />

            {/* Project Number */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#0b0f14]/80 backdrop-blur-md border border-white/10 text-blue-400 text-sm font-bold">
                0{index + 1}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className={`${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
        {/* Small Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-blue-500" />
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">
            Featured Project
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
          <span className="mr-2">{project.icon}</span>
          {project.title}
        </h3>

        {/* Description Card */}
        <div className="relative bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 sm:p-6 mb-6">
          <p className="text-gray-400 text-sm sm:text-base leading-7">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-7">
          <p className="text-xs uppercase tracking-[0.18em] font-semibold text-gray-500 mb-3">
            Technologies
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="px-3 py-1.5 rounded-lg
                           bg-[#121820]
                           border border-white/[0.08]
                           text-gray-300 text-xs sm:text-sm
                           hover:text-blue-400
                           hover:border-blue-500/30
                           hover:bg-blue-500/[0.05]
                           transition-all duration-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Client */}
          <a
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl
                       bg-white/[0.04]
                       border border-white/10
                       text-gray-300 text-sm font-medium
                       hover:bg-white/[0.08]
                       hover:text-white
                       hover:border-white/20
                       transition-all duration-300"
          >
            Client
            <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
              ↗
            </span>
          </a>

          {/* Server */}
          <a
            href={project.server}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl
                       bg-white/[0.04]
                       border border-white/10
                       text-gray-300 text-sm font-medium
                       hover:bg-white/[0.08]
                       hover:text-white
                       hover:border-white/20
                       transition-all duration-300"
          >
            Server
            <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
              ↗
            </span>
          </a>

          {/* Live Site */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl
                       bg-blue-500
                       text-white text-sm font-semibold
                       shadow-lg shadow-blue-500/10
                       hover:bg-blue-400
                       hover:shadow-blue-500/20
                       transition-all duration-300"
          >
            Live Site
            <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </a>

          {/* Details */}
          <Link
            to={project.details}
            className="group/btn inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl
                       border border-blue-500/25
                       text-blue-400 text-sm font-semibold
                       hover:bg-blue-500/10
                       hover:border-blue-500/40
                       transition-all duration-300"
          >
            Details
            <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <section
      id="project"
      className="relative bg-[#0b0f14] text-white py-20 sm:py-24 px-5 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-500/[0.025] blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-blue-500/[0.025] blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-blue-500" />

            <span className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]">
              My Work
            </span>

            <span className="w-8 h-[1px] bg-blue-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-7 mt-5">
            A selection of projects I have built using modern technologies,
            focusing on responsive design, clean code, and real-world
            functionality.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24 sm:space-y-28 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.details}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
