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
const Skills = () => {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-center mb-2 text-white">SKILLS</h1>

      <div className="bg-black flex flex-col md:flex-row justify-center gap-6 py-4">
        {/* Technologies */}
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-xl border border-white/20 glass w-full md:w-1/2">
          <p className="text-center text-xl text-white uppercase font-bold mb-3">
            Technologies
          </p>
          <div className="grid grid-cols-3 gap-4 place-items-center">
            <img className="size-12" src={html} alt="html" />
            <img className="size-12" src={css} alt="css" />
            <img className="size-12" src={javascript} alt="javascript" />
            <img className="size-12" src={tailwind} alt="tailwind" />
            <img className="size-12" src={react} alt="react" />
            <img className="size-12" src={firebase} alt="firebase" />
            <img className="size-12" src={node} alt="node" />
            <img className="size-12" src={express} alt="express" />
            <img className="size-12" src={mongo} alt="mongo" />
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-xl border border-white/20 glass w-full md:w-1/2">
          <p className="text-center text-xl text-white uppercase font-bold mb-3">
            Tools
          </p>
          <div className="grid grid-cols-3 gap-4 place-items-center">
            <img className="size-12" src={git} alt="git" />
            <img className="size-12" src={github} alt="github" />
            <img className="size-12" src={vs} alt="vs code" />
            <img className="size-12" src={figma} alt="figma" />
            <img className="size-12" src={semrush} alt="semrush" />
            <img className="size-12" src={postman} alt="postman" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
