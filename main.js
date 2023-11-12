fetch('groceryItems.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('groceryItemsContainer');
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'grid-item relative';
            itemElement.innerHTML = `
              <img class="w-full h-full object-cover" src="${item.imageUrl}" alt="${item.itemName}">
              <div class="item-name absolute top-0 right-0 bg-black bg-opacity-50 text-white font-bold p-2">${item.itemName}</div>
          `;
            container.appendChild(itemElement);
        });
    });
