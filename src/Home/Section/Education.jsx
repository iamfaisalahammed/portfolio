import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section>
      <h2 className="text-center text-white text-3xl font-bold uppercase mb-2">
        EDUCATION
      </h2>
      <div className="flex justify-center items-center bg-black py-8  px-4">
        <div
          className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl border border-gray-300/30 shadow-lg 
                      hover:shadow-blue-500/40 transition duration-300 group relative"
        >
          {/* Icon */}
          <div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 
                        bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center 
                        rounded-full shadow-lg"
          >
            <FaGraduationCap className="text-3xl" />
          </div>

          <h3 className="text-white text-lg font-bold text-center mt-6">
            Diploma in Telecommunication Technology
          </h3>
          <p className="text-gray-300 text-center">Feni Computer Institute</p>
          <p className="text-gray-400 text-sm text-center">
            Currently in 7th Semester (2021 - Present)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
