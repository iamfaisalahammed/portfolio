import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectTwo = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-900">
      <div className="container mx-auto p-6">
        <button
          onClick={goBack}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 inline-block"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
          Lost and Found Website
        </h1>

        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">
          🚀 Used Technologies
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Frontend:</strong> React.js, Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> Firebase (Authentication & Database)
          </li>
          <li>
            <strong>Animations:</strong> Framer Motion, Lottie
          </li>
          <li>
            <strong>Routing:</strong> React Router
          </li>
          <li>
            <strong>Notifications:</strong> React Toastify, SweetAlert
          </li>
          <li>
            <strong>Date Picker:</strong> React DatePicker
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-500 mt-8 mb-4">
          🔗 Live Demo
        </h2>
        <p className="text-lg">
          <a
            href="https://lost-found-9fc15.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Click here to visit the live site
          </a>
        </p>

        <h3 className="text-2xl font-semibold text-indigo-500 mt-8 mb-4">
          🚀 Conclusion
        </h3>
        <p className="text-lg leading-relaxed mb-6">
          The <strong>Lost and Found Website</strong> is a powerful, intuitive
          platform that facilitates the recovery of lost items and ensures
          seamless interaction between users.
        </p>

        <p className="text-lg">
          👨‍💻 Developed by <strong>Faisal Ahammed</strong>
        </p>
      </div>
    </div>
  );
};

export default ProjectTwo;
