import React, { useState } from 'react';

export default function InventoryForm({ onAdd }) {
  const [form, setForm] = useState({ name: '', qty: 0, price: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return alert('Name required');
    onAdd({
      name: form.name.trim(),
      qty: Number(form.qty) || 0,
      price: Number(form.price) || 0
    });
    setForm({ name: '', qty: 0, price: 0 });
  };

  return (
    <form className="inventory-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Item name" />
      </div>

      <div className="field">
        <label>Quantity</label>
        <input name="qty" type="number" value={form.qty} onChange={handleChange} placeholder="0" />
      </div>

      <div className="field">
        <label>Price</label>
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="0.00" />
      </div>

      <div className="form-actions">
        <button className="btn primary" type="submit">Add Item</button>
        <button className="btn ghost" type="button" onClick={() => setForm({ name:'', qty:0, price:0 })}>Clear</button>
      </div>
    </form>
  );
}
