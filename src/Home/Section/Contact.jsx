import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_nqy9xxr",
        "template_6eok0mr",
        form.current,
        "BWNW8N-7BArcbiYQl",
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
        setIsSending(false);
      })
      .catch((error) => {
        console.log("EMAILJS ERROR:", error);

        toast.error(error.text || "Failed to send message");
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#0b0f14] text-white py-20 px-6 lg:px-12"
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Let's work together
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            Get In <span className="text-blue-500">Touch</span>
          </h2>

          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Whether it's a project, collaboration, or a new opportunity, feel free to reach out.
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white/[0.03] border border-gray-800 rounded-2xl p-7 sm:p-9">
            <div className="mb-8">
              <p className="text-blue-400 text-sm uppercase tracking-widest font-semibold mb-2">
                Contact information
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold">
                Let's start a conversation
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
              I'm always open to discussing new projects, creative ideas, and opportunities to build impactful digital solutions together.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#11161d] border border-gray-800 hover:border-blue-500/40 transition duration-300">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <FaPhoneAlt className="text-blue-400 text-lg" />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-gray-200 mt-1">+8801820037321</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#11161d] border border-gray-800 hover:border-blue-500/40 transition duration-300">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-blue-400 text-lg" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-gray-200 mt-1 break-all">
                    faisalahammed003@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#11161d] border border-gray-800 hover:border-blue-500/40 transition duration-300">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-blue-400 text-lg" />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-gray-200 mt-1">Chittagong, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/[0.03] border border-gray-800 rounded-2xl p-7 sm:p-9">
            <div className="mb-7">
              <p className="text-blue-400 text-sm uppercase tracking-widest font-semibold mb-2">
                Send a message
              </p>

              <h3 className="text-2xl font-bold">Let's Discuss Opportunities</h3>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3.5 bg-[#11161d] text-white rounded-xl border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-600 transition duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3.5 bg-[#11161d] text-white rounded-xl border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-600 transition duration-300"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3.5 bg-[#11161d] text-white rounded-xl border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-600 resize-none transition duration-300"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition duration-300 shadow-lg shadow-blue-600/10"
              >
                {isSending ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </section>
  );
};

export default Contact;
