let url = 'https://rickandmortyapi.com/api/character';
let shoppingList = {};

async function getCharacters() {
    let response = await fetch(url);
    let data = await response.json();
    return data.results.map(item => {
        return {...item, price: item.episode.length, stock: 2}
    });
}

async function paintCharacters() {
    let $container = document.querySelector('#charactersContainer');

    let characters = await getCharacters();
    for(let character of characters) {
        let $pill = document.createElement('div');
        $pill.classList.add('character-pill');
        $pill.dataset.id = character.id;
        $pill.dataset.name = character.name;
        $pill.dataset.price = character.price;
        $pill.dataset.stock = character.stock;
        $pill.innerHTML = `
            <div class="character-pill-container">
                <div class="character-header">
                    <img src="${character.image}">
                </div>
                <div class="character-body">
                    <h4>${character.name} <span class="price">(${character.price}€)</span></h4>
                    <h5>Stock: ${character.stock}</h4>
                    <div class="character-summary">
                        <div class="character-status">${character.status}</div>
                        <button class="add-to-cart fa-solid fa-cart-shopping">
                    </div>
                </div>
            </div>
        `

        let $btn = $pill.querySelector('button.add-to-cart');
        $btn.addEventListener('click', addItemToShoppingList);
        $container.appendChild($pill);
    }
}

function toggleShoppingList() {
    let $shoppingListContainer = document.querySelector('#shoppingListContainer');
    $shoppingListContainer.classList.toggle('show');
}

function addItemToShoppingList() {
    let $pill = this.closest('.character-pill');
    
    let id = $pill.dataset.id;
    let name = $pill.dataset.name;
    let price = $pill.dataset.price;
    let stock = $pill.dataset.stock;
    
    if(!shoppingList.hasOwnProperty(id)) {
        //Lo añadimos de 0 al carrito
        shoppingList[id] = {
            id: parseInt(id),
            name: name,
            price: parseInt(price),
            count: 0,
            stock: parseInt(stock)
        };
    }
    changeItemCountFromShoppingList(id, 1);
    refreshShoppingList();
}

function refreshShoppingList() {
    let $shoppingListBody = document.querySelector('#shoppingList tbody');
    $shoppingListBody.innerHTML = '';

    let totalPrice = 0;
    for(let productId in shoppingList) {
        let product = shoppingList[productId];

        let $tr = document.createElement('tr');
        $tr.dataset.id = product.id;
        $tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}€</td>
            <td>${product.count}</td>
            <td>${product.count * product.price}</td>
            <td>
                <button class="add-item-to-cart fa-solid fa-plus"></button>
                <button class="remove-item-from-cart fa-solid fa-minus"></button>
            </td>
        `;
        let $addBtn = $tr.querySelector('.add-item-to-cart');
        let $removeBtn = $tr.querySelector('.remove-item-from-cart');
        $addBtn.addEventListener('click', addItemToShoppingListFromCart);
        $removeBtn.addEventListener('click', removeItemFromShoppingListFromCart);
        $shoppingListBody.appendChild($tr);

        totalPrice += product.count * product.price;
    }

    let $totalPrice = document.querySelector('#totalPrice');
    $totalPrice.textContent = totalPrice + '€';
}

function addItemToShoppingListFromCart() {
    let $row = this.closest('tr');
    let productId = parseInt($row.dataset.id);
    changeItemCountFromShoppingList(productId, 1);
}

function removeItemFromShoppingListFromCart() {
    let $row = this.closest('tr');
    let productId = parseInt($row.dataset.id);
    changeItemCountFromShoppingList(productId, -1);
}

function changeItemCountFromShoppingList(productId, change) {
    if(!shoppingList.hasOwnProperty(productId)) {
        console.error('The product is not in the shopping list');
        return;
    }
    
    if(shoppingList[productId].count + change > shoppingList[productId].stock) {
        alert('Estás excediendo el stock');
    } else {
        shoppingList[productId].count += change;
        if(shoppingList[productId].count <= 0) {
            delete shoppingList[productId];
        }
    }
    refreshShoppingList();
}

function doOrder() {
    if(Object.keys(shoppingList).length === 0) {
        alert('El carrito está vacío');
    } else {
        alert('Compra realizada!');
        shoppingList = {};
        refreshShoppingList();
    }
}

paintCharacters();

let $toggleShoppingListBtn = document.querySelector('#toggleShoppingListBtn');
$toggleShoppingListBtn.addEventListener('click', toggleShoppingList);

let $doOrderBtn = document.querySelector('#doOrderBtn');
$doOrderBtn.addEventListener('click', doOrder);