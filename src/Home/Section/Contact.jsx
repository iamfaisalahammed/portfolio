import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // import the css

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fp284b6", // Replace with your EmailJS Service ID
        "template_6eok0mr", // Replace with your EmailJS Template ID
        form.current,
        "tfhng-JnJ5_qnRMZy" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!"); // Show success toast
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again later."); // Show error toast
        }
      );
  };

  return (
    <section className="bg-[#121212] py-6 text-white">
      <h1 className="text-3xl font-bold text-center pb-9 text-white">
        CONTACT
      </h1>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Contact Info */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              Have questions or want to work together? Send me a message!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl shadow-md backdrop-blur-sm">
                  <FaPhoneAlt className="text-blue-400 text-xl"></FaPhoneAlt>
                </div>
                <span className="text-sm sm:text-lg">+8801820037321</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl shadow-md backdrop-blur-sm">
                  <FaEnvelope className="text-blue-400 text-xl"></FaEnvelope>
                </div>
                <span className="text-sm sm:text-lg">
                  faisalahammed003@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl shadow-md backdrop-blur-sm">
                  <FaMapMarkerAlt className="text-blue-400 text-xl"></FaMapMarkerAlt>
                </div>
                <span className="text-sm sm:text-lg">
                  Chittagong, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-xl text-lg font-semibold hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container to display messages */}
      <ToastContainer></ToastContainer>
    </section>
  );
};

export default Contact;
