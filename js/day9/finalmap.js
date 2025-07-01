// Empty cart using Map
const cart = new Map();

// Example product objects
const product1 = { id: "p101", name: "T-shirt", price: 500 };
const product2 = { id: "p102", name: "Jeans", price: 1200 };

// Function to add product to cart
function addToCart(product) {
    if (cart.has(product.id)) {
        // If already in cart, increase quantity
        const existing = cart.get(product.id);
        existing.quantity += 1;
        cart.set(product.id, existing); // overwrite with updated
    } else {
        // If not in cart, add with quantity 1
        cart.set(product.id, { ...product, quantity: 1 });
    }
}

// Simulating cart actions
addToCart(product1);
addToCart(product2);
addToCart(product1); // add same product again

// Final cart output
console.log("🛒 Final Cart:");
cart.forEach((item, key) => {
    console.log(`${item.name} (x${item.quantity}) - Rs.${item.price * item.quantity}`);
});
