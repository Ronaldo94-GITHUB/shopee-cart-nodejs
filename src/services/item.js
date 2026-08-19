export function createItem(name, price, quantity = 1) {
  return {
    name,
    price,
    quantity,
    subtotal() {
      return this.price * this.quantity;
    }
  };
}
