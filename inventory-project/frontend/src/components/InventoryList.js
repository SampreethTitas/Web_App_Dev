import React from 'react';

export default function InventoryList({ items, onEditQty, onDelete }) {
  if (!items || items.length === 0) {
    return <div className="empty">No items yet. Add items using the form.</div>;
  }

  return (
    <ul className="inventory-list">
      {items.map(item => (
        <li key={item.id} className="inventory-item">
          <div className="item-info">
            <div className="item-meta">
              <div className="item-name">{item.name}</div>
              <div className="item-sub">Qty: {item.qty} • ₹{Number(item.price).toFixed(2)}</div>
            </div>
          </div>

          <div className="item-actions">
            <button className="action-small edit" onClick={() => onEditQty && onEditQty(item.id)}>Edit</button>
            <button className="action-small delete" onClick={() => onDelete && onDelete(item.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
