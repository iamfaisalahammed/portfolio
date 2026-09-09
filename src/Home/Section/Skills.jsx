
import { useState } from "react";
import { motion } from "framer-motion";

import html from "../../Image/icon/HTML.png";
import css from "../../Image/icon/css.png";
import javascript from "../../Image/icon/JavaScript.png";
import tailwind from "../../Image/icon/tailwind.png";
import react from "../../Image/icon/react.png";
import firebase from "../../Image/icon/firebase.png";
import node from "../../Image/icon/node.png";
import express from "../../Image/icon/express.png";
import mongo from "../../Image/icon/mongo.png";

// Tools
import figma from "../../Image/icon/figma-icon-1024x1024-mvfh9xsk.png";
import git from "../../Image/icon/git.png";
import github from "../../Image/icon/github icon.png";
import vs from "../../Image/icon/visual-studio-code-icon-2048x2026-9ua8vqiy.png";
import semrush from "../../Image/icon/semrush.png";
import postman from "../../Image/icon/postman-removebg-preview.png";
import vercel from "../../Image/icon/vercel.png";
import pixso from "../../Image/icon/pixso-removebg-preview (1).png";
import Ahrefs from "../../Image/icon/ahref-L2NTFFOU-webp-1020×640--02-10-2025_04_24_AM.png";

const skillsData = [
  { name: "HTML", img: html, color: "#E44D26" },
  { name: "CSS", img: css, color: "#264DE4" },
  { name: "JavaScript", img: javascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", img: tailwind, color: "#38BDF8" },
  { name: "React", img: react, color: "#61DAFB" },
  { name: "Firebase", img: firebase, color: "#FFCA28" },
  { name: "Node.js", img: node, color: "#8CC84B" },
  { name: "Express.js", img: express, color: "#FFFFFF" },
  { name: "MongoDB", img: mongo, color: "#47A248" },
];

const toolsData = [
  { name: "Git", img: git, color: "#F05032" },
  { name: "GitHub", img: github, color: "#FFFFFF" },
  { name: "VS Code", img: vs, color: "#007ACC" },
  { name: "Figma", img: figma, color: "#F24E1E" },
  { name: "Semrush", img: semrush, color: "#FF6D00" },
  { name: "Postman", img: postman, color: "#FF5733" },
  { name: "Pixso", img: pixso, color: "#FFC0CB" },
  { name: "Ahrefs", img: Ahrefs, color: "#FF8800" },
  { name: "Vercel", img: vercel, color: "#FFFFFF" },
];

const cardVariant = {
  hidden: {
    y: 35,
    opacity: 0,
  },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  const [techName, setTechName] = useState("Technologies");
  const [toolName, setToolName] = useState("Development Tools");

  const [techColor, setTechColor] = useState("#60A5FA");
  const [toolColor, setToolColor] = useState("#60A5FA");

  return (
    <section
      id="skills"
      className="bg-[#0b0f14] text-white py-20 px-6 lg:px-12 overflow-hidden"
    >
      <div className="container mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            My expertise
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            Skills & <span className="text-blue-500">Tools</span>
          </h2>

          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Technologies and tools I use to build modern, responsive,
            and scalable web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

          {/* Technologies */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white/[0.03] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-blue-500/40 transition duration-300"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Technologies
                </p>

                <h3
                  className="text-2xl font-bold mt-1 transition-colors duration-300"
                  style={{ color: techColor }}
                >
                  {techName}
                </h3>
              </div>

              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 font-bold text-lg">
                  01
                </span>
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-3 gap-4">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={cardVariant}
                  className="group flex flex-col items-center justify-center min-h-[105px] rounded-xl border border-gray-800 bg-[#11161d] hover:border-gray-600 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => {
                    setTechName(skill.name);
                    setTechColor(skill.color);
                  }}
                  onMouseLeave={() => {
                    setTechName("Technologies");
                    setTechColor("#60A5FA");
                  }}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />

                  <span className="text-xs text-gray-500 group-hover:text-gray-300 mt-3 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white/[0.03] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-blue-500/40 transition duration-300"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Tools
                </p>

                <h3
                  className="text-2xl font-bold mt-1 transition-colors duration-300"
                  style={{ color: toolColor }}
                >
                  {toolName}
                </h3>
              </div>

              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 font-bold text-lg">
                  02
                </span>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-3 gap-4">
              {toolsData.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  custom={index}
                  variants={cardVariant}
                  className="group flex flex-col items-center justify-center min-h-[105px] rounded-xl border border-gray-800 bg-[#11161d] hover:border-gray-600 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => {
                    setToolName(tool.name);
                    setToolColor(tool.color);
                  }}
                  onMouseLeave={() => {
                    setToolName("Development Tools");
                    setToolColor("#60A5FA");
                  }}
                >
                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />

                  <span className="text-xs text-gray-500 group-hover:text-gray-300 mt-3 transition-colors">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

