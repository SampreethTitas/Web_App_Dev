// src/components/Skills.js
import React from "react";

function Skills() {
  const skillList = ["React", "Node.js", "Express", "MongoDB", "Java", "Git"];
  return (
    <section className="skills">
      <h2>🛠 Skills</h2>
      <ul>
        {skillList.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
