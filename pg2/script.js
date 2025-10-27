document.addEventListener('DOMContentLoaded', () => {
    const inventoryForm = document.getElementById('inventoryForm');
    const inventoryTableBody = document.getElementById('inventoryTableBody');
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    const editForm = document.getElementById('editForm');
    const editItemName = document.getElementById('editItemName');
    const editItemQuantity = document.getElementById('editItemQuantity');

    let inventory = [];
    let currentEditIndex = null;

    // Function to render inventory table
    const renderInventory = () => {
        inventoryTableBody.innerHTML = '';
        inventory.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>
                    <button class="btn btn-sm btn-warning edit-btn" data-index="${index}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Delete</button>
                </td>
            `;
            inventoryTableBody.appendChild(row);
        });
    };

    // Add new item
    inventoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const itemName = document.getElementById('itemName').value.trim();
        const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

        if (itemName && itemQuantity > 0) {
            inventory.push({ name: itemName, quantity: itemQuantity });
            inventoryForm.reset();
            renderInventory();
        }
    });

    // Handle edit and delete button clicks
    inventoryTableBody.addEventListener('click', (e) => {
        const target = e.target;
        const index = parseInt(target.dataset.index);

        // Edit item
        if (target.classList.contains('edit-btn')) {
            currentEditIndex = index;
            editItemName.value = inventory[index].name;
            editItemQuantity.value = inventory[index].quantity;
            editModal.show();
        }

        // Delete item
        if (target.classList.contains('delete-btn')) {
            inventory.splice(index, 1);
            renderInventory();
        }
    });

    // Save changes to edited item
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newName = editItemName.value.trim();
        const newQuantity = parseInt(editItemQuantity.value);

        if (newName && newQuantity > 0 && currentEditIndex !== null) {
            inventory[currentEditIndex] = { name: newName, quantity: newQuantity };
            currentEditIndex = null;
            editModal.hide();
            renderInventory();
        }
    });
});
