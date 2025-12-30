let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const totalSpan = document.getElementById('total');

    cartCount.innerText = cart.length;
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ₦${item.price.toLocaleString()} <button onclick="removeFromCart(${index})">❌</button>`;
        cartItems.appendChild(li);
    });

    totalSpan.innerText = total.toLocaleString();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function openCart() {
    document.getElementById('cartModal').style.display = 'block';
    document.getElementById('cartOverlay').style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('cartOverlay').style.display = 'none';
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase!');
    cart = [];
    total = 0;
    updateCart();
    closeCart();
}

const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const navMenu = document.querySelector('.nav-menu');

menuOpenButton.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});

menuCloseButton.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});

document.getElementById('cartBtn').addEventListener('click', openCart);
