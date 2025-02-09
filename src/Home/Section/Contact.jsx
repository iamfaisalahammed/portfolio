import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#121212] py-6 text-white">
      <h1 className="text-3xl font-bold text-center pb-9 text-white">
        CONTACT
      </h1>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section - Contact Info */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              Have questions or want to work together? Send me a message!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl shadow-md backdrop-blur-sm">
                  <FaPhoneAlt className="text-blue-400 text-xl" />
                </div>
                <span className="text-lg">+8801820037321</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl shadow-md backdrop-blur-sm">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>
                <span className="text-lg">faisalahammed003@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl shadow-md backdrop-blur-sm">
                  <FaMapMarkerAlt className="text-blue-400 text-xl" />
                </div>
                <span className="text-lg">Chittagong, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
              ></textarea>
              <button className="w-full py-3 bg-blue-500 text-white rounded-xl text-lg font-semibold hover:bg-blue-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
