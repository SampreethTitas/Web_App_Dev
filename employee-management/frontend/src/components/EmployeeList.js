// frontend/src/components/EmployeeList.js
import React from 'react';

export default function EmployeeList({ items, onEdit, onDelete }) {
  if (!items || items.length === 0) return <div className="empty">No employees found.</div>;

  return (
    <div className="list">
      {items.map(emp => (
        <div key={emp._id || emp.id} className="card">
          <div className="meta">
            <div style={{ fontWeight: 700 }}>{emp.name}</div>
            <div className="small">{emp.email} • {emp.jobTitle} • {emp.department}</div>
            <div className="small">Salary: ₹{Number(emp.salary).toLocaleString()}</div>
          </div>

          <div className="actions">
            <button className="btn" onClick={() => onEdit(emp)}>Edit</button>
            <button className="btn danger" onClick={() => onDelete(emp._id || emp.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
