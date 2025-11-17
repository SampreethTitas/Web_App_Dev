import React, { useEffect, useState } from 'react';
import { fetchItems, createItem, updateItem, deleteItem } from './api';
import InventoryForm from './components/InventoryForm';
import InventoryList from './components/InventoryList';

function App() {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    try {
      const data = await fetchItems();
      setItems(data);
    } catch (err) {
      console.error('Failed to load items', err);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleAdd = async (form) => {
    try {
      const newItem = await createItem(form);
      setItems(prev => [...prev, newItem]);
    } catch (err) {
      console.error('Add failed', err);
    }
  };

  const handleUpdateQty = async (id, newQty) => {
    try {
      const updated = await updateItem(id, { qty: newQty });
      setItems(prev => prev.map(it => it.id === id ? updated : it));
    } catch (err) {
      console.error('Update failed', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setItems(prev => prev.filter(it => it.id !== id));
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  return (
    <div className="container">
      <header className="app-header">
        <div>
          <h1 className="title">Inventory Management</h1>
          <p className="subtitle">React (port 3002) ⇄ Express API (port 5002)</p>
        </div>
      </header>

      <div className="grid">
        <section>
          <div className="inventory-form">
            <InventoryForm onAdd={handleAdd} />
          </div>
        </section>

        <aside>
          <div className="list-card">
            <InventoryList
              items={items}
              onEditQty={(id) => {
                const current = items.find(i => i.id === id);
                const input = prompt('Enter new quantity', current ? current.qty : 0);
                if (input === null) return;
                const newQty = Number(input);
                if (!Number.isFinite(newQty)) return alert('Enter valid number');
                handleUpdateQty(id, newQty);
              }}
              onDelete={(id) => {
                if (window.confirm('Delete item?')) handleDelete(id);
              }}
            />
          </div>
        </aside>
      </div>

      <div className="small-note">Backend at http://localhost:5002 — Frontend at http://localhost:3002</div>
    </div>
  );
}

export default App;
