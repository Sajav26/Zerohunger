var cartItemCount = 0; // Initialize cart item count
var totalAmount = 0; // Initialize total amount

function addToCart(productId) {
  var product = document.getElementById(productId);
  var productName = product.querySelector('h2').textContent;
  var productPrice = parseFloat(product.querySelector('.price').textContent.slice(1)); // Extracting price and converting to float4
  var productImage = product.querySelector('img').src;

  var cartItem = document.createElement('div');
  cartItem.classList.add('product-list');
  cartItem.innerHTML = `
    <div class="image">
      <img src="${productImage}" alt="">
    </div>
    <div class="name">${productName}</div>
    <div class="total-price">£${productPrice.toFixed(2)}</div>
    <div class="quantity">
      <button class="decrease">-</button>
      <span>1</span>
      <button class="increase">+</button>
    </div>
  `;
  
  var shoppingCart = document.querySelector('.list-cart');
  shoppingCart.appendChild(cartItem);

  var increaseButton = cartItem.querySelector('.increase');
  var decreaseButton = cartItem.querySelector('.decrease');
  var quantitySpan = cartItem.querySelector('.quantity span');
  var totalPrice = cartItem.querySelector('.total-price');

  increaseButton.addEventListener('click', function() {
    var quantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = quantity + 1;
    totalPrice.textContent = `£${(productPrice * (quantity + 1)).toFixed(2)}`;
    updateCartItemCount(1, productPrice); // Increase cart item count when increasing quantity and update total amount
  });

  decreaseButton.addEventListener('click', function() {
    var quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
      quantitySpan.textContent = quantity - 1;
      totalPrice.textContent = `£${(productPrice * (quantity - 1)).toFixed(2)}`;
      updateCartItemCount(-1, productPrice); // Decrease cart item count when decreasing quantity and update total amount
      if (quantity === 1) {
        shoppingCart.removeChild(cartItem); // Remove the product from cart if quantity becomes zero
      }
    }
  });

  updateCartItemCount(1, productPrice); // Increase cart item count when adding a product and update total amount
}

function clearCart() {
  var shoppingCart = document.querySelector('.list-cart');
  shoppingCart.innerHTML = ''; // Clearing all child elements
  cartItemCount = 0; // Reset cart item count to zero
  totalAmount = 0; // Reset total amount to zero
  document.getElementById('cartItemCount').textContent = cartItemCount;
  document.getElementById('totalAmount').textContent = '£0.00';
  updateCartItemCount(-cartItemCount, 0); // Reset cart item count to zero when clearing the cart and reset total amount
}

function updateCartItemCount(change, price) {
  cartItemCount += change;
  totalAmount += change * price; // Update total amount based on price change
  document.getElementById('cartItemCount').textContent = cartItemCount;
  document.getElementById('totalAmount').textContent = `£${totalAmount.toFixed(2)}`; // Display total amount
}

// Function to execute when the user clicks the "CHECK OUT" button
function checkout() {
  // Retrieve the total amount from the shopping cart
  var totalAmount = document.getElementById('totalAmount').textContent;

  // Store the total amount in local storage
  localStorage.setItem('totalAmount', totalAmount);

  // Redirect the user to the checkout page
  window.location.href = "checkout.html?totalAmount=" + encodeURIComponent(totalAmount);
}

let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart')
});
closeCart.addEventListener('click', () => {
  body.classList.toggle('showCart')
});
