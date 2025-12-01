// frontend/src/components/EmployeeForm.js
import React, { useState, useEffect } from 'react';

export default function EmployeeForm({ onSave, editData, onCancel }) {
  const [form, setForm] = useState({ name: '', email: '', jobTitle: '', department: '', salary: '' });

  useEffect(() => {
    if (editData) setForm({ name: editData.name || '', email: editData.email || '', jobTitle: editData.jobTitle || '', department: editData.department || '', salary: editData.salary || 0 });
    else setForm({ name: '', email: '', jobTitle: '', department: '', salary: '' });
  }, [editData]);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return alert('Name and email required');
    onSave({ ...form, salary: Number(form.salary) || 0 });
    if (!editData) setForm({ name: '', email: '', jobTitle: '', department: '', salary: '' });
  };

  return (
    <form onSubmit={submit}>
      <div className="form-row">
        <input className="input" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input className="input" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      </div>

      <div className="form-row">
        <input className="input" name="jobTitle" placeholder="Job Title" value={form.jobTitle} onChange={handleChange} />
        <input className="input" name="department" placeholder="Department" value={form.department} onChange={handleChange} />
        <input className="input" name="salary" type="number" placeholder="Salary" value={form.salary} onChange={handleChange} />
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <button className="btn primary" type="submit">{editData ? 'Update' : 'Add Employee'}</button>
        {editData && <button type="button" className="btn" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}
