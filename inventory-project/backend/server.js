// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5002; // default port 5002

app.use(cors()); // for development allow all origins
app.use(express.json());

// In-memory inventory
let inventory = [];
const genId = () => Math.random().toString(36).slice(2, 9);

// --- API routes ---
app.get('/api/items', (req, res) => {
  res.json(inventory);
});

app.get('/api/items/:id', (req, res) => {
  const item = inventory.find(i => i.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

app.post('/api/items', (req, res) => {
  const { name, qty = 0, price = 0 } = req.body;
  if (!name) return res.status(400).json({ error: 'Name required' });
  const newItem = { id: genId(), name, qty: Number(qty), price: Number(price) };
  inventory.push(newItem);
  res.status(201).json(newItem);
});

app.patch('/api/items/:id', (req, res) => {
  const idx = inventory.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const item = inventory[idx];
  const { name, qty, price } = req.body;
  if (name !== undefined) item.name = name;
  if (qty !== undefined) item.qty = Number(qty);
  if (price !== undefined) item.price = Number(price);
  inventory[idx] = item;
  res.json(item);
});

app.delete('/api/items/:id', (req, res) => {
  const idx = inventory.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const removed = inventory.splice(idx, 1)[0];
  res.json(removed);
});

// Serve React build if exists (single-server deploy)
const publicPath = path.join(__dirname, 'public');
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
