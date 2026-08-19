export function addItem(cart, item) {
  const existingItem = cart.find(
    product => product.name.toLowerCase() === item.name.toLowerCase()
  );

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }
}

export function removeItem(cart, itemName) {
  const index = cart.findIndex(
    product => product.name.toLowerCase() === itemName.toLowerCase()
  );

  if (index === -1) return;

  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
}

export function deleteItem(cart, itemName) {
  const index = cart.findIndex(
    product => product.name.toLowerCase() === itemName.toLowerCase()
  );

  if (index !== -1) {
    cart.splice(index, 1);
  }
}

export function updateQuantity(cart, itemName, quantity) {
  const item = cart.find(
    product => product.name.toLowerCase() === itemName.toLowerCase()
  );

  if (!item) return;

  if (quantity <= 0) {
    deleteItem(cart, itemName);
  } else {
    item.quantity = quantity;
  }
}

export function calculateTotal(cart) {
  return cart.reduce(
    (total, product) => total + product.subtotal(),
    0
  );
}

export function calculateTotalQuantity(cart) {
  return cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
}

export function displayCart(cart) {
  console.log("\n==============================");
  console.log("       SHOPEE CART");
  console.log("==============================");

  cart.forEach((product, index) => {
    console.log(`\n${index + 1}. ${product.name}`);
    console.log(`Preço: R$ ${product.price.toFixed(2)}`);
    console.log(`Quantidade: ${product.quantity}`);
    console.log(`Subtotal: R$ ${product.subtotal().toFixed(2)}`);
  });

  console.log("\n------------------------------");
  console.log(`Quantidade total: ${calculateTotalQuantity(cart)}`);
  console.log(`TOTAL: R$ ${calculateTotal(cart).toFixed(2)}`);
  console.log("------------------------------");
}
