// api.js
// Using proxy in package.json so we can use relative paths in development
const API_BASE = ''; // '' => proxy will forward to backend

export async function fetchItems() {
  const res = await fetch(`${API_BASE}/api/items`);
  if (!res.ok) throw new Error('Failed to fetch items');
  return res.json();
}

export async function createItem(data) {
  const res = await fetch(`${API_BASE}/api/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateItem(id, data) {
  const res = await fetch(`${API_BASE}/api/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteItem(id) {
  const res = await fetch(`${API_BASE}/api/items/${id}`, {
    method: 'DELETE'
  });
  return res.json();
}
