// src/components/Experience.js
import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <section className="experience">
        <h2>💼 Experience</h2>
        <div>
          <h3>Intern — ABC Tech Pvt Ltd</h3>
          <p>Worked on building REST APIs using Node.js and Express.</p>
        </div>
        <div>
          <h3>Freelancer</h3>
          <p>Developed small web apps using React and Firebase.</p>
        </div>
      </section>
    );
  }
}

export default Experience;
