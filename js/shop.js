// Product data
const products = [
    {
        id: 1,
        name: "Ahri Tee (Women's)",
        price: 25,
        image: "images/ahri-tshirt.jpg",
        description: "Official Ahri inspired t-shirt with high-quality print. 100% cotton. Charm everyone around you in this Ahri tee."
    },
    {
        id: 2,
        name: "Yasuo Premium Hoodie",
        price: 85,
        image: "images/yasuo-hoodie.jpg",
        description: "Face the wind - and all the rest of the elements - in comfort and style. Unlock your inner samurai and never wander alone."
    },
    {
        id: 3,
        name: "Lux Poster",
        price: 22.35,
        image: "images/lux-poster.jpg",
        description: "Decorate your room with League of Legends splash art featuring Lux, the Lady of Luminosity. This poster will probably make your other posters jealous."
    },
    {
        id: 4,
        name: "Ezreal Mousepad",
        price: 19.99,
        image: "images/ezreal-mousepad.jpg",
        description: "High-quality mousepad featuring Arcade Ezreal's splash art and an anti-slip bottom. Features: 14 x 10 in / 35.6 x 25.4 cm ,Double-stitched, Anti-Fraying Edge"
    }
];

// Display products
function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-buttons">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="info-btn" data-id="${product.id}">Info</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Add event listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            alert("Product was added to cart");
        });
    });

    document.querySelectorAll('.info-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showProductInfo(productId);
        });
    });
}

// Show product info modal
function showProductInfo(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" style="width:100%; max-height:300px; object-fit:contain;">
            <p class="product-description">${product.description}</p>
            <p class="product-price">Price: $${product.price.toFixed(2)}</p>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'block';

    // Close modal when clicking X
    modal.querySelector('.close-modal').addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.removeChild(modal);
        }
    });
}

// Initialize shop page
document.addEventListener('DOMContentLoaded', displayProducts);