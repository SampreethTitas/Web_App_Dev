// const inventoryForm = document.getElementById('inventoryForm');
// const inventoryCards = document.getElementById('inventoryCards');

// inventoryForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const itemName = document.getElementById('itemName').value.trim();
//     const itemQuantity = document.getElementById('itemQuantity').value.trim();

//     if (itemName && itemQuantity) {
        
//         const card = document.createElement('div');
//         card.className = 'col-md-4';
//         card.innerHTML = `
//             <div class="card shadow-sm">
//                 <div class="card-body">
//                     <h5 class="card-title">${itemName}</h5>
//                     <p class="card-text">Quantity: ${itemQuantity}</p>
//                     <button class="btn btn-sm btn-warning edit-btn">Edit</button>
//                     <button class="btn btn-sm btn-danger delete-btn">Delete</button>
//                 </div>
//             </div>
//         `;

//         inventoryCards.appendChild(card);

       
//         document.getElementById('itemName').value = '';
//         document.getElementById('itemQuantity').value = '';
//     }

//     handleCardActions();
// });

// function handleCardActions() {
//     const deleteButtons = document.querySelectorAll('.delete-btn');
//     const editButtons = document.querySelectorAll('.edit-btn');

//     deleteButtons.forEach((btn) =>
//         btn.addEventListener('click', (event) => {
//             event.target.closest('.col-md-4').remove();
//         })
//     );

//     editButtons.forEach((btn) =>
//         btn.addEventListener('click', (event) => {
//             const card = event.target.closest('.card');
//             const titleElement = card.querySelector('.card-title');
//             const quantityElement = card.querySelector('.card-text');

//             const newName = prompt('Edit Item Name:', titleElement.textContent);
//             const newQuantity = prompt('Edit Quantity:', quantityElement.textContent.replace('Quantity: ', ''));

//             if (newName !== null && newName.trim() !== '') titleElement.textContent = newName.trim();
//             if (newQuantity !== null && newQuantity.trim() !== '') quantityElement.textContent = `Quantity: ${newQuantity.trim()}`;
//         })
//     );
// }


// handleCardActions();


const inventoryForm = document.getElementById('inventoryForm');
const inventoryCards = document.getElementById('inventoryCards');

inventoryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value.trim();
    const itemQuantity = document.getElementById('itemQuantity').value.trim();
    const itemImage = document.getElementById('itemImage').value.trim();

    if (itemName && itemQuantity && itemImage) {
        // Create a new card
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card shadow-sm">
                <img src="${itemImage}" class="card-img-top" alt="${itemName}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${itemName}</h5>
                    <p class="card-text">Quantity: ${itemQuantity}</p>
                    <button class="btn btn-sm btn-warning edit-btn">Edit</button>
                    <button class="btn btn-sm btn-danger delete-btn">Delete</button>
                </div>
            </div>
        `;

        inventoryCards.appendChild(card);

        // Clear input fields
        document.getElementById('itemName').value = '';
        document.getElementById('itemQuantity').value = '';
        document.getElementById('itemImage').value = '';
    }

    handleCardActions();
});

function handleCardActions() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const editButtons = document.querySelectorAll('.edit-btn');

    deleteButtons.forEach((btn) =>
        btn.addEventListener('click', (event) => {
            event.target.closest('.col-md-4').remove();
        })
    );

    editButtons.forEach((btn) =>
        btn.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const titleElement = card.querySelector('.card-title');
            const quantityElement = card.querySelector('.card-text');
            const imageElement = card.querySelector('.card-img-top');

            const newName = prompt('Edit Item Name:', titleElement.textContent);
            const newQuantity = prompt('Edit Quantity:', quantityElement.textContent.replace('Quantity: ', ''));
            const newImage = prompt('Edit Image URL:', imageElement.src);

            if (newName !== null && newName.trim() !== '') titleElement.textContent = newName.trim();
            if (newQuantity !== null && newQuantity.trim() !== '') quantityElement.textContent = `Quantity: ${newQuantity.trim()}`;
            if (newImage !== null && newImage.trim() !== '') imageElement.src = newImage.trim();
        })
    );
}

// Ensure actions work for dynamically added elements
handleCardActions();
