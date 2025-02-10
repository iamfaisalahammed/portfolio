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
// --tool---
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
  { name: "CSS", img: css, color: "#0000FF" },
  { name: "JavaScript", img: javascript, color: "#F7DF1E" },
  { name: "Tailwind", img: tailwind, color: "#38BDF8" },
  { name: "React", img: react, color: "#61DAFB" },
  { name: "Firebase", img: firebase, color: "#FFCA28" },
  { name: "Node.js", img: node, color: "#8CC84B" },
  { name: "Express.js", img: express, color: "#FFFFFF" },
  { name: "MongoDB", img: mongo, color: "#47A248" },
];

const toolsData = [
  { name: "Git", img: git, color: "#F05032" },
  { name: "GitHub", img: github, color: "#181717" },
  { name: "VS Code", img: vs, color: "#007ACC" },
  { name: "Figma", img: figma, color: "#F24E1E" },
  { name: "Semrush", img: semrush, color: "#FF6D00" },
  { name: "Postman", img: postman, color: "#FF5733" },
  { name: "Pixso", img: pixso, color: "#FFC0CB" },
  { name: "Ahrefs", img: Ahrefs, color: "#FF8800" },
  { name: "Vercel", img: vercel, color: "#FFFFFF" },
];

const Skills = () => {
  const [techName, setTechName] = useState("Technology");
  const [toolName, setToolName] = useState("Tools");
  const [techColor, setTechColor] = useState("#FFFFFF");
  const [toolColor, setToolColor] = useState("#FFFFFF");

  // Variants for animation control
  const bounceVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="px-4 overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-2 text-white">SKILLS</h1>
      <div className="bg-[#212122] flex flex-col md:flex-row justify-center gap-6 py-4">
        {/* Technologies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-xl border border-white/20 glass w-full md:w-1/2"
        >
          <p
            className="text-center text-xl uppercase font-bold mb-8 transition-all"
            style={{ color: techColor }}
          >
            {techName}
          </p>
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 place-items-center">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  custom={index}
                  variants={bounceVariant}
                  onMouseEnter={() => {
                    setTechName(skill.name);
                    setTechColor(skill.color);
                  }}
                  onMouseLeave={() => {
                    setTechName("Technology");
                    setTechColor("#FFFFFF");
                  }}
                >
                  <img
                    className="size-12 transition-all"
                    src={skill.img}
                    alt={skill.name}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-xl border border-white/20 glass w-full md:w-1/2"
        >
          <p
            className="text-center text-xl uppercase font-bold mb-8 transition-all"
            style={{ color: toolColor }}
          >
            {toolName}
          </p>
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 place-items-center">
              {toolsData.map((tool, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  custom={index}
                  variants={bounceVariant}
                  onMouseEnter={() => {
                    setToolName(tool.name);
                    setToolColor(tool.color);
                  }}
                  onMouseLeave={() => {
                    setToolName("Tools");
                    setToolColor("#FFFFFF");
                  }}
                >
                  <img
                    className="size-12 transition-all"
                    src={tool.img}
                    alt={tool.name}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
