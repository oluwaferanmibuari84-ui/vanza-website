const products = [

    {
        name: "iPhone 17 Pro",
        category: "Phones",
        price: 990000,
        rating: 4.8,
        image: "data:image/webp;base64,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"

    },

    {
        name: "Samsung Galaxy S21",
        category: "Phones",
        price: 350000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "Nike Air Max",
        category: "Shoes",
        price: 12000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "Classic Black Watch",
        category: "Accessories",
        price: 45000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "Sony Headphones",
        category: "Electronics",
        price: 18000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "Oversized Black Hoodie",
        category: "Fashion",
        price: 25000,
        rating: 4.6,
        image: "data:image/webp;base64,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",
    },

    {
        name: "Luxury Face Cream",
        category: "Beauty",
        price: 20000,
        rating: 4.4,
        image: "https://th.bing.com/th/id/OIP.DatGfdBjgO8KjMVQYwDEgAHaE8?w=300&h=200&c=7&r=0&o=7&pid=1.7&rm=2"
    },

    {
        name: "Modern Table Lamp",
        category: "Home",
        price: 55000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "MacBook Air",
        category: "Computing",
        price: 1250000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    
        
    },

    {
        name: "White Sneakers",
        category: "Shoes",
        price: 15000,
        rating: 4.5,
        image: "https://i.pinimg.com/originals/44/a1/32/44a132b69544058f90c65d4173a93537.jpg"
    }

];

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const categoryLinks = document.querySelectorAll(".categories a");
const sortProducts = document.querySelector("#sortProducts");
const priceFilter = document.querySelector("#priceFilter");

let currentPrice = "all";

// Keep track of selected filters
let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";

// Display products
function renderProducts(productList) {

    productGrid.innerHTML = "";

    if (productList.length === 0) {
        productGrid.innerHTML = `
            <p class="no-products">
                No products found.
            </p>
        `;
        return;
    }

    productList.forEach(function(product) {

        productGrid.innerHTML += `
            <div class="product-card" data-product="${product.name}">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <button 
                    class="product-heart"
                    onclick="event.stopPropagation(); toggleWishlist('${product.name}')">
                    ♡
                    </button>

                </div>

                <div class="product-info">

                    <p class="product-category">
                        ${product.category}
                    </p>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <div class="rating">
                        ★★★★★
                        <span>${product.rating}</span>
                    </div>

                    <p class="product-price">
                        ₦${product.price.toLocaleString()}
                    </p>

                    <button class="add-cart" onclick="addToCart('${product.name}')">
                        Add to Cart
                    </button>

                </div>

            </div>
        `;
    });


    // Make each product clickable
    const productCards =
        document.querySelectorAll(".product-card");

    productCards.forEach(function(card) {

        card.addEventListener("click", function() {

            const productName =
                card.dataset.product;

            openProduct(productName);

        });

    });

}


function applyFilters() {

    let filteredProducts = products.filter(function(product) {

        const searchText = currentSearch.toLowerCase();

        const matchesCategory =
            currentCategory === "all" ||
            product.category === currentCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText);

        const matchesPrice =
            currentPrice === "all" ||
            product.price < Number(currentPrice);

        return matchesCategory &&
               matchesSearch &&
               matchesPrice;
    });


    if (currentSort === "low") {

        filteredProducts.sort(function(a, b) {
            return a.price - b.price;
        });

    }

    else if (currentSort === "high") {

        filteredProducts.sort(function(a, b) {
            return b.price - a.price;
        });

    }

    else if (currentSort === "rating") {

        filteredProducts.sort(function(a, b) {
            return b.rating - a.rating;
        });

    }


    renderProducts(filteredProducts);


    const searchStatus = document.querySelector("#searchStatus");

    if (currentSearch !== "") {

        searchStatus.textContent =
            `${filteredProducts.length} product(s) found for "${currentSearch}"`;

    } else {

        searchStatus.textContent =
            `${filteredProducts.length} products available`;

    }
}


// Categories
categoryLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        currentCategory = link.dataset.category;

        applyFilters();

    });

});


// Sorting
sortProducts.addEventListener("change", function() {

    currentSort = sortProducts.value;

    applyFilters();

});


// Show all products when page loads
applyFilters();

priceFilter.addEventListener("change", function() {

    currentPrice = priceFilter.value;

    applyFilters();

});

function openProduct(productName) {

    const product = products.find(function(item) {
        return item.name === productName;
    });

    if (!product) return;

    document.querySelector("main").innerHTML = `

        <section class="product-details">

            <button class="back-btn" onclick="location.reload()">
                ← Back to Shop
            </button>

            <div class="details-container">

                <div class="details-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <div class="details-info">

                    <p class="product-category">
                        ${product.category}
                    </p>

                    <h1>${product.name}</h1>

                    <div class="rating">
                        ★★★★★ ${product.rating}
                    </div>

                    <h2 class="details-price">
                        ₦${product.price.toLocaleString()}
                    </h2>

                    <p class="details-description">
                        Discover quality and style with
                        ${product.name}. Shop with VANTA
                        Market for a convenient shopping
                        experience.
                    </p>

                    <div class="quantity-box">

                        <label for="quantity">Quantity:</label>

                        <input
                            type="number"
                            id="quantity"
                            value="1"
                            min="1"
                            max="10"
                        >

                    </div>

                    <button class="details-cart"
                        onclick="addToCart('${product.name}')">
                        Add to Cart
                    </button>

                </div>

            </div>

        </section>

    `;

}

// CART
let cart = JSON.parse(localStorage.getItem("vantaCart")) || [];

function addToCart(productName) {

    const product = products.find(function(item) {
        return item.name === productName;
    });

    if (!product) return;

    const existingProduct = cart.find(function(item) {
        return item.name === productName;
    });

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem("vantaCart", JSON.stringify(cart));

    updateCartCount();

    alert(`${product.name} added to cart 🛒`);
}

function updateCartCount() {

    const cartCount = document.querySelector(".cart-count");

    const totalItems = cart.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);

    cartCount.textContent = totalItems;
}

updateCartCount();

// OPEN CART
const cartButton = document.querySelector("#cartButton");

cartButton.addEventListener("click", function() {
    openCart();
});
function openCart() {

    document.querySelector("main").innerHTML = `

        <section class="cart-page">

            <button class="back-btn" onclick="location.reload()">
                ← Continue Shopping
            </button>

            <div class="cart-header">
                <div>
                    <p>YOUR SHOPPING BAG</p>
                    <h1>Shopping Cart</h1>
                </div>
            </div>

            <div id="cartItems"></div>

        </section>

    `;

    renderCart();
}

function renderCart() {

    const cartItems = document.querySelector("#cartItems");

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty 🛒</h2>
                <p>Add some products to your cart and they will appear here.</p>

                <button onclick="location.reload()">
                    Start Shopping
                </button>
            </div>
        `;

        return;
    }

    let total = 0;

    let cartHTML = `
        <div class="cart-list">
    `;

    cart.forEach(function(item, index) {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        cartHTML += `

            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="cart-item-info">

                    <p>${item.name}</p>

                    <span>
                        ₦${item.price.toLocaleString()}
                    </span>

                </div>

                <div class="quantity-controls">

                    <button onclick="changeQuantity(${index}, -1)">
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="changeQuantity(${index}, 1)">
                        +
                    </button>

                </div>

                <strong>
                    ₦${itemTotal.toLocaleString()}
                </strong>

                <button 
                    class="remove-item"
                    onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>

        `;
    });

    cartHTML += `
        </div>

        <div class="cart-summary">

            <p>Subtotal</p>

            <h2>₦${total.toLocaleString()}</h2>

            <button class="checkout-btn" onclick="openCheckout()">
                Proceed to Checkout →
            </button>

        </div>
    `;

    cartItems.innerHTML = cartHTML;
}

function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("vantaCart", JSON.stringify(cart));

    updateCartCount();

    renderCart();
}

function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("vantaCart", JSON.stringify(cart));

    updateCartCount();

    renderCart();
}

function openCheckout() {

    if (cart.length === 0) {
        alert("Your cart is empty 🛒");
        return;
    }

    document.querySelector("main").innerHTML = `

        <section class="checkout-page">

            <button class="back-btn" onclick="openCart()">
                ← Back to Cart
            </button>

            <div class="checkout-heading">
                <p>VANTA MARKET</p>
                <h1>Checkout</h1>
            </div>

            <div class="checkout-container">

                <form class="checkout-form">

                    <h2>Delivery Information</h2>

                    <div class="form-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            id="fullName"
                            placeholder="Enter your full name"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label>Phone Number</label>
                        <input 
                            type="tel"
                            id="phone"
                            placeholder="08012345678"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label>Delivery Address</label>
                        <textarea
                            id="address"
                            placeholder="Enter your delivery address"
                            required
                        ></textarea>
                    </div>

                    <div class="form-group">
                        <label>City</label>

                        <select id="city" required>
                            <option value="">Select city</option>
                            <option>Lagos</option>
                            <option>Abuja</option>
                            <option>Ibadan</option>
                            <option>Benin City</option>
                            <option>Port Harcourt</option>
                            <option>Other</option>
                        </select>

                    </div>

                    <h2>Payment Method</h2>

                    <label class="payment-option">
                        <input 
                            type="radio"
                            name="payment"
                            value="card"
                            required
                        >
                        💳 Card Payment
                    </label>

                    <label class="payment-option">
                        <input 
                            type="radio"
                            name="payment"
                            value="transfer"
                        >
                        🏦 Bank Transfer
                    </label>

                    <button type="submit" class="place-order">
                        Place Order →
                    </button>

                </form>


                <div class="checkout-summary">

                    <h2>Order Summary</h2>

                    <div id="checkoutItems"></div>

                    <div class="checkout-total">
                        <span>Total</span>
                        <strong id="checkoutTotal"></strong>
                    </div>

                </div>

            </div>

        </section>

    `;

    renderCheckoutSummary();
}

function renderCheckoutSummary() {

    const checkoutItems = document.querySelector("#checkoutItems");
    const checkoutTotal = document.querySelector("#checkoutTotal");

    let total = 0;

    checkoutItems.innerHTML = "";

    cart.forEach(function(item) {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        checkoutItems.innerHTML += `

            <div class="checkout-item">

                <span>
                    ${item.name} × ${item.quantity}
                </span>

                <strong>
                    ₦${itemTotal.toLocaleString()}
                </strong>

            </div>

        `;
    });

    checkoutTotal.textContent = `₦${total.toLocaleString()}`;
}

document.addEventListener("submit", function(event) {

    if (!event.target.classList.contains("checkout-form")) {
        return;
    }

    event.preventDefault();

    alert("Order placed successfully 🎉");

    cart = [];

    localStorage.setItem("vantaCart", JSON.stringify(cart));

    updateCartCount();

    location.reload();
});

// WISHLIST
let wishlist = JSON.parse(localStorage.getItem("vantaWishlist")) || [];

function toggleWishlist(productName) {

    const existingProduct = wishlist.find(function(item) {
        return item.name === productName;
    });

    if (existingProduct) {

        wishlist = wishlist.filter(function(item) {
            return item.name !== productName;
        });

    } else {

        const product = products.find(function(item) {
            return item.name === productName;
        });

        if (!product) return;

        wishlist.push({
            name: product.name,
            price: product.price,
            image: product.image,
            rating: product.rating
        });
    }

    localStorage.setItem(
        "vantaWishlist",
        JSON.stringify(wishlist)
    );

    renderWishlistButtons();
}

function renderWishlistButtons() {

    document.querySelectorAll(".product-heart").forEach(function(button) {

        const card = button.closest(".product-card");

        if (!card) return;

        const productName = card.dataset.product;

        const saved = wishlist.some(function(item) {
            return item.name === productName;
        });

        button.textContent = saved ? "♥" : "♡";
    });

    

}

const accountButton = document.querySelector("#accountButton");

accountButton.addEventListener("click", function() {
    openAccount();
});

function openAccount() {

    document.querySelector("main").innerHTML = `

        <section class="account-page">

            <button class="back-btn" onclick="location.reload()">
                ← Back to Shop
            </button>

            <div class="account-heading">
                <p>VANTA MARKET</p>
                <h1>My Account</h1>
            </div>

            <div class="account-grid">

                <div class="account-card">
                    <div class="account-icon">👤</div>
                    <h3>Profile</h3>
                    <p>Manage your personal information.</p>
                    <button>View Profile →</button>
                </div>

                <div class="account-card">
                    <div class="account-icon">📦</div>
                    <h3>My Orders</h3>
                    <p>View your previous and current orders.</p>
                    <button>View Orders →</button>
                </div>

                <div class="account-card">
                    <div class="account-icon">❤️</div>
                    <h3>Wishlist</h3>
                    <p>See products you saved for later.</p>
                    <button onclick="openWishlist()">
                        View Wishlist →
                    </button>
                </div>

                <div class="account-card">
                    <div class="account-icon">🛒</div>
                    <h3>My Cart</h3>
                    
                    <p>Continue shopping with your saved items.</p>
                    <button onclick="openCart()">
                        View Cart →
                    </button>
                </div>

            </div>

        </section>

    `;
}

searchInput.addEventListener("input", function() {

    currentSearch = searchInput.value.toLowerCase();

    applyFilters();

});

searchButton.addEventListener("click", function() {
    currentSearch = searchInput.value.trim().toLowerCase();
    applyFilters();
});

const wishlistButton = document.querySelector("#wishlistButton");

wishlistButton.addEventListener("click", function() {
    openWishlist();
});

function openWishlist() {

    document.querySelector("main").innerHTML = `

        <section class="cart-page">

            <button class="back-btn" onclick="location.reload()">
                ← Back to Shop
            </button>

            <div class="cart-header">
                <div>
                    <p>YOUR SAVED PRODUCTS</p>
                    <h1>My Wishlist</h1>
                </div>
            </div>

            <div id="wishlistItems"></div>

        </section>

    `;

    renderWishlist();
}

function renderWishlist() {

    const wishlistItems =
        document.querySelector("#wishlistItems");

    if (wishlist.length === 0) {

        wishlistItems.innerHTML = `

            <div class="empty-cart">

                <h2>Your wishlist is empty ❤️</h2>

                <p>
                    Save products you love and come back to them later.
                </p>

                <button onclick="location.reload()">
                    Start Shopping
                </button>

            </div>

        `;

        return;
    }

    let wishlistHTML = `
        <div class="cart-list">
    `;

    wishlist.forEach(function(item, index) {

        wishlistHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="cart-item-info">

                    <p>${item.name}</p>

                    <span>
                        ₦${item.price.toLocaleString()}
                    </span>

                </div>

                <strong>
                    ★ ${item.rating}
                </strong>

                <button
                    class="add-cart"
                    onclick="addToCart('${item.name}')">
                    Add to Cart
                </button>

                <button
                    class="remove-item"
                    onclick="removeFromWishlist(${index})">
                    Remove
                </button>

            </div>

        `;
    });

    wishlistHTML += `</div>`;

    wishlistItems.innerHTML = wishlistHTML;
}

function removeFromWishlist(index) {

    wishlist.splice(index, 1);

    localStorage.setItem(
        "vantaWishlist",
        JSON.stringify(wishlist)
    );

    renderWishlist();
}
