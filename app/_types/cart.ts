import { Product } from "./product";

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface CartItem extends Product {
  quantity: number;
  subtotal: number;
}
