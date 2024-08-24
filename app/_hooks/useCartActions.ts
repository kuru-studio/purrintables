import { useAtom } from "jotai";
import { Product } from "../_types/product";
import { shopCartAtom } from "../_contexts/shopCart";
import { useCallback, useContext } from "react";
import { NotificationContext } from "../_contexts/notification";
import { CartItem } from "../_types/cart";

export function useCartActions() {
  const notif = useContext(NotificationContext);
  const [shopCart, setShopCart] = useAtom(shopCartAtom);

  // for getting a certain item's current quantity
  function getProductQuantity(id: string, cartItems: CartItem[]) {
    // if item is found, return the quantity, instead return 0
    const item = cartItems.find((item) => item.id === id);
    return item?.quantity || 0;
  }

  // computes total price of the cart
  function getTotalPrice(items: CartItem[]) {
    return items.reduce((total, product) => total + product.subtotal, 0);
  }

  //   add to cart action, use useCallback, since we pass this as a prop
  const addToCart = useCallback(
    (product: Product) => {
      // get productQuantity, if 0 it's a new item

      const productQuantity = getProductQuantity(product.id, shopCart.items);
      const newQuantity = productQuantity + 1;

      const updatedCartItems = shopCart.items.map((item) => {
        // if item exists on the cart, we update the quantity instead of adding new item
        if (item.id === product.id) {
          return {
            ...item,
            // add 1 since we are adding a new instance og the item, compute subtotal
            quantity: newQuantity,
            subtotal: product.price * newQuantity,
          };
        }
        return item;
      });

      // if productQuantity is 0, we just add the new item to the cart as is
      if (productQuantity === 0) {
        updatedCartItems.push({
          ...product,
          quantity: 1,
          subtotal: product.price,
        });
      }

      // call state update and update cart total
      setShopCart({ items: updatedCartItems, total: getTotalPrice(updatedCartItems) });

      // call notifs
      notif?.openNotification(
        "Item has been added to Cart!",
        `${product.title} has been added to the Shopping Cart!`
      );
    },
    [shopCart, notif, setShopCart]
  );

  const removeToCart = useCallback(
    (id: string) => {
      // remove specific cart item by id
      const updatedCartItems = shopCart.items.filter((item) => item.id !== id);
      // call state update and update cart total
      setShopCart({ items: updatedCartItems, total: getTotalPrice(updatedCartItems) });
      notif?.openNotification(
        "Item has been removed to Cart!",
        `Item has been added to the Shopping Cart!`
      );
    },
    [shopCart, notif, setShopCart]
  );

  const updateQty = useCallback(
    (id: string, action: "add" | "remove" | "update", value: number = 0) => {
      const updatedCartItems = shopCart.items.map((item) => {
        // search for the updated item
        if (item.id === id) {
          // if action is "add" or "remove" iterate the qty up or down
          if (action != "update") {
            const newQuantity = action == "add" ? item.quantity + 1 : item.quantity - 1;
            return {
              ...item,
              quantity: newQuantity,
              subtotal: item.price * newQuantity,
            };
          }
          // if action is "update" directly update the qty
          return {
            ...item,
            quantity: value,
            subtotal: item.price * value,
          };
        }
        // if not the item no changes
        return item;
      });
      setShopCart({ items: updatedCartItems, total: getTotalPrice(updatedCartItems) });
    },
    [shopCart, setShopCart]
  );

  return { addToCart, removeToCart, shopCart, updateQty };
}
