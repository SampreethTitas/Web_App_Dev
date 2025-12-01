// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import './index.css';
import { fetchEmployees, createEmployee, updateEmployee, deleteEmployee } from './api';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const rows = await fetchEmployees();
      setEmployees(rows);
    } catch (err) {
      console.error(err);
      alert('Failed to load employees');
    } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const handleAdd = async (data) => {
    try {
      const created = await createEmployee(data);
      setEmployees(prev => [created, ...prev]);
    } catch (err) {
      console.error(err);
      alert('Create failed');
    }
  };

  const handleEdit = (emp) => setEditing(emp);

  const handleUpdate = async (data) => {
    try {
      const updated = await updateEmployee(editing._id, data);
      setEmployees(prev => prev.map(e => (e._id === updated._id ? updated : e)));
      setEditing(null);
    } catch (err) {
      console.error(err);
      alert('Update failed');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this employee?')) return;
    try {
      await deleteEmployee(id);
      setEmployees(prev => prev.filter(e => e._id !== id));
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <h2 className="title">Employee Management</h2>
          <div className="small">React (port 3002) ↔ Express API (port 5002)</div>
        </div>
        <div>
          <button className="btn" onClick={load}>Refresh</button>
        </div>
      </div>

      <section>
        <EmployeeForm onSave={editing ? handleUpdate : handleAdd} editData={editing} onCancel={() => setEditing(null)} />
      </section>

      <section>
        {loading ? <div className="small">Loading...</div> : <EmployeeList items={employees} onEdit={handleEdit} onDelete={handleDelete} />}
      </section>
    </div>
  );
}

export default App;
