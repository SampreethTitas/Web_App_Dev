import React, { Component } from "react";

class StudentList extends Component {
  render() {
    const { students } = this.props;

    return (
      <div className="list">
        <h2>📋 Registered Students</h2>

        {students.length === 0 ? (
          <p>No students registered yet.</p>
        ) : (
          <ul>
            {students.map((s, idx) => (
              <li key={idx}>
                <b>{s.name}</b> — {s.branch} — Sem: {s.semester}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default StudentList;
