// src/pages/Skills.jsx
import React from "react";
import "./Skills.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaReact } from "react-icons/fa";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS", level: 75 },
  { name: "HTML", level: 90 },
  { name: "Git", level: 70 },
  { name: "Redux", level: 65 },
  { name: "TypeScript", level: 70 }
];

export default function Skills() {
  return (
    <div
      className="skills container py-5 text-light"
      style={{ minHeight: "100vh" }}>
      <h1 className="text-center mb-4">Mes Compétences</h1>
      <div className="row">
        {skills.map((skill) => (
          <div className="col-lg-4 col-md-4 sm-12 my-2">
            <div className="skill-card">
              <CircularProgressbarWithChildren value={66}>
                <strong>{skill.name}</strong>
                <div style={{ fontSize: 12, marginTop: 5 }}>
                  <strong>{skill.level}%</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
