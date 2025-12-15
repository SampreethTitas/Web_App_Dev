import React from 'react';

function About() {
  return (
    <section className="page">
      <h2>About Us</h2>
      <p>
        TechCorp is a technology solutions company focused on delivering
        enterprise-grade web applications.
      </p>

      <ul className="about-list">
        <li>✔ Frontend: React, Redux, Tailwind</li>
        <li>✔ Backend: Node.js, Express</li>
        <li>✔ Database: MongoDB</li>
        <li>✔ Architecture: RESTful APIs & SPA</li>
      </ul>

      <p>
        This application demonstrates <b>client-side routing</b> using
        <b> react-router-dom</b> without reloading the browser.
      </p>
    </section>
  );
}

export default About;
