import React from 'react';

function Home() {
  return (
    <section className="page">
      <h2>Welcome to TechCorp</h2>
      <p className="subtitle">
        Building modern web solutions using React and Full-Stack technologies.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>🚀 Fast Development</h3>
          <p>
            We build scalable and high-performance applications using modern
            frameworks like React, Node.js, and MongoDB.
          </p>
        </div>

        <div className="card">
          <h3>🔐 Secure Systems</h3>
          <p>
            Security-first approach with authentication, authorization,
            and secure API design.
          </p>
        </div>

        <div className="card">
          <h3>🌐 SPA Architecture</h3>
          <p>
            Single Page Applications provide smooth navigation without page
            reloads using React Router.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
