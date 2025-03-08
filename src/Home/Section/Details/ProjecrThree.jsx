import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectThree = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg">
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ← Back to Home
      </button>

      <h1 className="text-3xl font-bold text-center mb-6">
        Cloth Donation Web Application
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
          🚀 Used Technologies
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            💻 <strong>Frontend:</strong> React.js, Tailwind CSS
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            ⚙️ <strong>Backend:</strong> Express.js, MongoDB
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            🔒 <strong>Auth:</strong> Firebase
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            📡 <strong>API Handling:</strong> TanStack Query
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
          🧥 Project Overview
        </h2>
        <p className="leading-relaxed">
          This application connects donors with people in need, allowing
          seamless donation of clothes. It includes role-based dashboards,
          donation tracking, and real-time updates.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
          🌟 Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>✅ Secure Firebase Authentication</li>
          <li>✅ Role-based dashboards for Donors & Organizations</li>
          <li>✅ Advanced search filters</li>
          <li>✅ Volunteer Management System</li>
          <li>✅ Dark mode support</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
          🔗 Live Demo & Code Repositories
        </h2>
        <ul className="space-y-2">
          <li>
            <strong>Live:</strong>{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Your Live Link
            </a>
          </li>
          <li>
            <strong>Frontend:</strong>{" "}
            <a href="#" className="text-blue-500 hover:underline">
              GitHub Repo - Client
            </a>
          </li>
          <li>
            <strong>Backend:</strong>{" "}
            <a href="#" className="text-blue-500 hover:underline">
              GitHub Repo - Server
            </a>
          </li>
        </ul>
      </section>

      <p className="text-center text-lg font-medium">
        👨‍💻 Developed by <strong>Faisal Ahammed</strong>
      </p>
    </div>
  );
};

export default ProjectThree;
