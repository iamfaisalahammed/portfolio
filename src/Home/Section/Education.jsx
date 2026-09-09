  
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#0b0f14] text-white py-20 px-6 lg:px-12 overflow-hidden"
    >
      <div className="container mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            My academic journey
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-blue-500">Education</span>
          </h2>

          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">

          {/* Timeline Line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gray-800 sm:-translate-x-1/2"></div>

          {/* Diploma */}
          <div className="relative flex items-start gap-6 sm:gap-0 mb-12">

            {/* Icon */}
            <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-blue-600 border-4 border-[#0b0f14] flex items-center justify-center shadow-lg shadow-blue-500/20 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
              <FaGraduationCap className="text-white text-sm" />
            </div>

            {/* Card */}
            <div className="w-full sm:w-[46%] sm:mr-auto">
              <div className="bg-white/[0.03] border border-gray-800 rounded-2xl p-6 hover:border-blue-500/40 transition duration-300">

                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4">
                  Completed • 2026
                </span>

                <h3 className="text-xl font-bold text-white leading-7">
                  Diploma in Telecommunication Engineering
                </h3>

                <p className="text-gray-300 mt-3">
                  Feni Computer Institute
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  Diploma Program
                </p>

              </div>
            </div>
          </div>

          {/* BSc */}
          <div className="relative flex items-start gap-6 sm:gap-0">

            {/* Icon */}
            <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-blue-600 border-4 border-[#0b0f14] flex items-center justify-center shadow-lg shadow-blue-500/20 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
              <FaGraduationCap className="text-white text-sm" />
            </div>

            {/* Card */}
            <div className="w-full sm:w-[46%] sm:ml-auto">
              <div className="bg-white/[0.03] border border-gray-800 rounded-2xl p-6 hover:border-blue-500/40 transition duration-300">

                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-4">
                  Currently Studying
                </span>

                <h3 className="text-xl font-bold text-white leading-7">
                  BSc in Computer Science & Engineering
                </h3>

                <p className="text-gray-300 mt-3">
                  World University of Bangladesh
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  Undergraduate Program
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;

