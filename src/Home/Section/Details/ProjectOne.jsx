import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectOne = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="container mx-auto">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6 hover:bg-blue-600 transition-all"
        >
          Back to Home
        </button>

        <h1 className="text-4xl font-bold text-center mb-6">
          Blood Donation Web Application
        </h1>

        <h2 className="text-2xl font-semibold mb-4">🚀 Used Technologies</h2>
        <ul className="space-y-2">
          <li>
            <strong>Frontend:</strong> React.js, Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> Express.js, MongoDB
          </li>
          <li>
            <strong>Authentication & Security:</strong> Firebase, JWT
          </li>
          <li>
            <strong>State Management & API Handling:</strong> TanStack Query
          </li>
          <li>
            <strong>Payment Integration:</strong> Stripe
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🩸 Project Overview
        </h2>
        <p className="text-lg leading-relaxed">
          The <strong>Blood Donation Web Application</strong> is a comprehensive
          platform designed to streamline the blood donation process. This
          project provides an intuitive interface for{" "}
          <strong>donors, volunteers, and administrators</strong> to interact
          efficiently. It simplifies blood donation requests, donor management,
          and user accessibility while ensuring a{" "}
          <strong>seamless, secure, and mobile-friendly experience</strong>.
        </p>

        <h3 className="text-xl font-semibold mt-8">🌟 Key Features</h3>

        <div className="space-y-4">
          <h4 className="font-semibold">
            ✅ User Authentication & Role-Based Access Control
          </h4>
          <ul className="list-inside list-disc pl-4">
            <li>
              Secure <strong>Firebase Authentication</strong> (Google, Email &
              Password login)
            </li>
            <li>
              <strong>JWT token-based authentication</strong> for private APIs
            </li>
            <li>
              <strong>Different dashboards</strong> for Admins, Donors, and
              Volunteers
            </li>
          </ul>

          <h4 className="font-semibold">✅ Blood Donation Management</h4>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Donors</strong> can register and update their donation
              status
            </li>
            <li>
              Users can make <strong>real-time blood requests</strong>
            </li>
            <li>
              Advanced <strong>donor search filters</strong> based on location,
              blood group, and availability
            </li>
          </ul>

          <h4 className="font-semibold">✅ Admin Dashboard</h4>
          <ul className="list-inside list-disc pl-4">
            <li>
              Manage <strong>donors, requests, and volunteers</strong>
            </li>
            <li>
              Oversee <strong>fundraising and content updates</strong>
            </li>
            <li>Generate reports and insights for better decision-making</li>
          </ul>

          <h4 className="font-semibold">✅ Volunteer System</h4>
          <ul className="list-inside list-disc pl-4">
            <li>Volunteers can sign up and help manage donation requests</li>
            <li>Notifications for new donation opportunities</li>
          </ul>

          <h4 className="font-semibold">✅ Payment & Funding System</h4>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Stripe integration</strong> for seamless donations
            </li>
            <li>Secure payment processing for funding blood donation drives</li>
          </ul>

          <h4 className="font-semibold">✅ Fully Responsive Design</h4>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Optimized for mobile, tablet, and desktop</strong>
            </li>
            <li>Ensures smooth navigation and usability across all devices</li>
          </ul>

          <h4 className="font-semibold">✅ Additional Functionalities</h4>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>SEO-friendly</strong> with meta tags for better search
              rankings
            </li>
            <li>
              <strong>Dark mode support</strong> for enhanced user experience
            </li>
            <li>
              <strong>Fast performance</strong> with optimized API handling
              using <strong>TanStack Query</strong>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🛠 Tech Stack Justification
        </h2>
        <ul className="space-y-2">
          <li>
            <strong>React.js & Tailwind CSS</strong> → For a dynamic, modern,
            and responsive UI
          </li>
          <li>
            <strong>MongoDB & Express.js</strong> → Efficient database and
            server management
          </li>
          <li>
            <strong>JWT & Firebase</strong> → Secure authentication and role
            management
          </li>
          <li>
            <strong>TanStack Query</strong> → Optimized state management and API
            caching
          </li>
          <li>
            <strong>Stripe</strong> → Secure payment and donation handling
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🔗 Live Demo & Code Repositories
        </h2>
        <ul className="space-y-2">
          <li>
            <strong>Live Website:</strong>{" "}
            <a
              href="[Your Live Link]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Your Live Link
            </a>
          </li>
          <li>
            <strong>Frontend Code:</strong>{" "}
            <a
              href="[GitHub Repo - Client]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub Repo - Client
            </a>
          </li>
          <li>
            <strong>Backend Code:</strong>{" "}
            <a
              href="[GitHub Repo - Server]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub Repo - Server
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          📌 Future Enhancements
        </h2>
        <ul className="space-y-2">
          <li>
            Implement a <strong>chat system</strong> for donor-recipient
            communication
          </li>
          <li>
            Add <strong>AI-based donor matching</strong> for quicker blood
            request processing
          </li>
          <li>
            Introduce <strong>automated reminders</strong> for eligible donors
          </li>
          <li>
            Expand <strong>multilingual support</strong> for wider accessibility
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8">🚀 Conclusion</h3>
        <p className="text-lg leading-relaxed mt-4">
          The <strong>Blood Donation Web Application</strong> is a powerful and
          user-friendly platform that revolutionizes the blood donation process.
          With a focus on security, accessibility, and seamless user experience,
          this project is a step toward{" "}
          <strong>
            making blood donation easier and more efficient for everyone
          </strong>
          .
        </p>

        <p className="text-center mt-8">
          👨‍💻 Developed by <strong>Faisal Ahammed</strong>
        </p>
      </div>
    </div>
  );
};

export default ProjectOne;
