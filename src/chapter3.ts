// Define a Product interface
interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

// Typed product list
const products: Product[] = [
  { id: 1, name: "Laptop", quantity: 10, price: 1000 },
  { id: 2, name: "Mouse", quantity: 50, price: 20 },
];

// Add product with type safety
function addProduct(product: Product): void {
  products.push(product);
}

// Find product by ID
function findProduct(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

// Update product quantity
function updateQuantity(id: number, qty: number): void {
  const product = findProduct(id);
  if (product) {
    product.quantity = qty;
  } else {
    console.warn("Product not found");
  }
}

// Calculate total inventory value
function calculateTotalValue(): number {
  return products.reduce((total, p) => total + p.quantity * p.price, 0);
}

// Example usage
addProduct({ id: 3, name: "Keyboard", quantity: 30, price: 45 });
updateQuantity(2, 40);
console.log("Total Inventory Value: $" + calculateTotalValue());
