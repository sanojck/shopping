fetch('groceryItems.json')
   .then(response => response.json())
   .then(data => {
       const container = document.getElementById('groceryItemsContainer');
       data.forEach(item => {
           const itemElement = document.createElement('div');
           itemElement.className = 'thumbnail-grid bg-cover';
           itemElement.innerHTML = `
               <img src="${item.imageUrl}" alt="${item.itemName}">
               <div class="item-name text-white bg-black">${item.itemName}</div>
           `;
           container.appendChild(itemElement);
       });
   });
