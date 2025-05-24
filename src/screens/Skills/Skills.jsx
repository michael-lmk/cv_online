// src/pages/Skills.jsx
import React from "react";


const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS", level: 75 },
  { name: "HTML", level: 90 },
  { name: "Git", level: 70 },
  { name: "Redux", level: 65 },
  { name: "TypeScript", level: 70 },
];

export default function Skills() {
  return (
    <div className="container py-5 text-light" style={{  minHeight: "100vh" }}>
      <h1 className="text-center mb-5">Mes Compétences</h1>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <h5 className="d-flex justify-content-between">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </h5>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${skill.level}%` }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
