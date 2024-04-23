
var cart = {};  // Object to hold items in cart
var products = {
  "1": {"name": "Game of Thrones", "price": 15.99 , "img": "images/GOT.jpeg"  },
  "2": {"name": "Dracula", "price": 15.99},
  "3": {"name": "Ugly Love", "price": 15.99},
  "4": {"name": "Verity", "price": 10.50},
  "5": {"name": "The Covenant of water", "price": 15.99},
  "6": {"name": "It", "price": 15.99},
  "7": {"name": "The Teacher", "price": 15.99},
  "8": {"name": "The long way home", "price": 15.99},
  "9": {"name": "Regretting you", "price": 15.99},
  "10": {"name": "The Housemaid", "price": 15.99},
  "11": {"name": "Never Lie", "price": 15.99},
  // More products can be added here
};

// Add item to cart
function addToCart(productId, event) {
  if (event) {
    event.stopPropagation(); // Prevent the dropdown from closing
  }
  if (cart[productId]) {
    cart[productId].count++;
  } else {
    cart[productId] = {count: 1, name: products[productId].name, price: products[productId].price};
  }
  updateCartCount();
  updateCartDropdown();
}

// Remove one item
function removeFromCart(productId, event) {
  if (event) {
    event.stopPropagation(); // Prevent the dropdown from closing
  }
  if (cart[productId]) {
    if (cart[productId].count > 1) {
      cart[productId].count--;
    } else {
      delete cart[productId];
    }
    updateCartCount();
    updateCartDropdown();
  }
}

// Update the cart count
function updateCartCount() {
  var totalCount = 0;
  var totalAmount = 0;
  for (var id in cart) {
    totalCount += cart[id].count;
    totalAmount += cart[id].count * cart[id].price;
  }
  document.getElementById('cart-count').innerText = totalCount;
  document.getElementById('cart-total').innerHTML = 'Total: $' + totalAmount.toFixed(2);
}

// Update the cart dropdown
function updateCartDropdown() {
  var cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  var isEmpty = true;
  for (var id in cart) {
    isEmpty = false;
    var itemElement = document.createElement('div');
    itemElement.className = 'dropdown-item d-flex justify-content-between align-items-center';
    itemElement.innerHTML = `
      <span>${cart[id].name} - $${cart[id].price.toFixed(2)}</span>
      <div>
        <button class="btn btn-sm btn-secondary change-quantity" onclick="removeFromCart('${id}', event)">-</button>
        <span class="px-2">${cart[id].count}</span>
        <button class="btn btn-sm btn-secondary change-quantity" onclick="addToCart('${id}', event)">+</button>
      </div>`;
    cartItemsContainer.appendChild(itemElement);
  }
  if (isEmpty) {
    cartItemsContainer.innerHTML = '<p class="dropdown-item text-center">No items in cart</p>';
    document.getElementById('cart-total').innerHTML = 'Total: $0.00';
  }
}

// Checkout function
function checkoutCart() {
  console.log("Checking out", cart);
  // Implement checkout functionality or integration with payment system here
}

// Add to Cart buttons event listeners
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();  // Stop the form from submitting
    var productId = this.getAttribute('data-id');
    addToCart(productId, event);
  });
});

document.getElementById('show-more').addEventListener('click', function() {
    var moreBooks = document.getElementById('more-books');
    if (moreBooks.style.display === 'none') {
      moreBooks.style.display = 'block';
      this.innerHTML = '<i class="fas fa-chevron-up fa-2x"></i>';
    } else {
      moreBooks.style.display = 'none';
      this.innerHTML = '<i class="fas fa-chevron-down fa-2x"></i>'; 
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const products = {
        "1": { "name": "Game of Thrones", "price": 15.99, "img": "images/GOT.jpeg" },
        "2": { "name": "Dracula", "price": 15.99, "img": "images/dracula.jpeg" },
        "3": { "name": "Ugly Love", "price": 15.99, "img": "images/ugly love.jpeg" },
        "4": {"name": "Verity", "price": 10.50, "img": "images/verity.jpeg"},
        "5": {"name": "The Covenant of water", "price": 15.99, "img": "images/covenant.jpeg"},
        "6": {"name": "It", "price": 15.99 , "img": "images/it.jpeg"},
        "7": {"name": "The Teacher", "price": 15.99, "img": "images/teacher.webp"},
        "8": {"name": "The long way home", "price": 15.99, "img": "images/long way"},
        "9": {"name": "Regretting you", "price": 15.99, "img": "images/regretting you.jpeg"},
        "10": {"name": "The Housemaid", "price": 15.99, "img": "images/The Housemaid.jpeg"},
        "11": {"name": "Never Lie", "price": 15.99, "img": "images/Never Lie.jpeg"},
        // Additional products
    };

    // Function to handle search and display results
    function searchProducts() {
        const searchText = document.querySelector('.search-input').value.toLowerCase();
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = '';  // Clear previous results
        let found = false;

        Object.keys(products).forEach(id => {
            const product = products[id];
            if (product.name.toLowerCase().includes(searchText)) {
                found = true;
                const productHTML = `
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <img src="${product.img}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">$${product.price.toFixed(2)}</p>
                                <button class="btn btn-primary" onclick="addToCart('${id}')">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `;
                resultsContainer.innerHTML += productHTML;
            }
        });

        resultsContainer.style.display = found ? 'flex' : 'none';  // Show/hide the results container
    }

    // Attach search event to search form submission
    document.querySelector('.search-bar-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission
        searchProducts();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const products = {
        "1": { "name": "Game of Thrones", "price": 15.99, "img": "images/GOT.jpeg" },
        "2": { "name": "Dracula", "price": 15.99, "img": "images/dracula.jpeg" },
        "3": { "name": "Ugly Love", "price": 15.99, "img": "images/ugly love.jpeg" },
        "4": {"name": "Verity", "price": 10.50, "img": "images/verity.jpeg"},
        "5": {"name": "The Covenant of water", "price": 15.99, "img": "images/covenant.jpeg"},
        "6": {"name": "It", "price": 15.99 , "img": "images/it.jpeg"},
        "7": {"name": "The Teacher", "price": 15.99, "img": "images/teacher.webp"},
        "8": {"name": "The long way home", "price": 15.99, "img": "images/long way"},
        "9": {"name": "Regretting you", "price": 15.99, "img": "images/regretting you.jpeg"},
        "10": {"name": "The Housemaid", "price": 15.99, "img": "images/The Housemaid.jpg"},
        "11": {"name": "Never Lie", "price": 15.99, "img": "images/Never Lie.jpg"},
        // Additional products
    };

    // Function to handle search and display results
    function searchProducts() {
        const searchText = document.querySelector('.search-input').value.toLowerCase();
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = '';  // Clear previous results
        let found = false;

        Object.keys(products).forEach(id => {
            const product = products[id];
            if (product.name.toLowerCase().includes(searchText)) {
                found = true;
                const productHTML = `
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <img src="${product.img}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">$${product.price.toFixed(2)}</p>
                                <button class="btn btn-primary" onclick="addToCart('${id}')">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `;
                resultsContainer.innerHTML += productHTML;
            }
        });

        resultsContainer.style.display = found ? 'flex' : 'none';  // Show/hide the results container
    }

    // Attach search event to search form submission
    document.querySelector('.search-bar-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission
        searchProducts();
    });
});
