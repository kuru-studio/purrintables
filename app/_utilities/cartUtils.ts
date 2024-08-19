import { CartItem } from "../_types/cart";

export function getTotalPrice(items: CartItem[]) {
  return items.reduce((total, product) => total + product.subtotal, 0);
}

export function getProductQuantity(id: string, cartItems: CartItem[]) {
  const item = cartItems.find((item) => item.id === id);
  return item?.quantity || 0;
}
