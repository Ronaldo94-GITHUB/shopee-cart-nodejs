import { createItem } from "./services/item.js";

import {
  addItem,
  removeItem,
  deleteItem,
  updateQuantity,
  displayCart
} from "./services/cart.js";

const cart = [];

const mouse = createItem("Mouse Gamer", 100, 2);
const teclado = createItem("Teclado Mecânico", 250, 1);
const headset = createItem("Headset Gamer", 180, 1);

addItem(cart, mouse);
addItem(cart, teclado);
addItem(cart, headset);

console.log("\nCARRINHO INICIAL");
displayCart(cart);

console.log("\nREMOVENDO 1 MOUSE");
removeItem(cart, "Mouse Gamer");
displayCart(cart);

console.log("\nALTERANDO HEADSET PARA 3 UNIDADES");
updateQuantity(cart, "Headset Gamer", 3);
displayCart(cart);

console.log("\nEXCLUINDO TECLADO");
deleteItem(cart, "Teclado Mecânico");
displayCart(cart);

console.log("\nProjeto executado com sucesso.");
