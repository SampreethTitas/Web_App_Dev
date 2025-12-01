// frontend/src/api.js
const BASE = ''; // proxy in package.json will forward to backend

export async function fetchEmployees() {
  const res = await fetch(`${BASE}/api/employees`);
  if (!res.ok) throw new Error('Failed to fetch employees');
  return res.json();
}

export async function createEmployee(data) {
  const res = await fetch(`${BASE}/api/employees`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateEmployee(id, data) {
  const res = await fetch(`${BASE}/api/employees/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteEmployee(id) {
  const res = await fetch(`${BASE}/api/employees/${id}`, { method: 'DELETE' });
  return res.json();
}
