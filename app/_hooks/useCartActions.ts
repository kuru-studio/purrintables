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

      const updatedCartItems = shopCart.items.map((item) => {
        // if item exists on the cart, we update the quantity instead of adding new item
        if (item.id === product.id) {
          return {
            ...item,
            // add 1 since we are adding a new instance og the item, compute subtotal
            quantity: productQuantity + 1,
            subtotal: product.price * productQuantity + 1,
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

      // compute total price
      const total = getTotalPrice(updatedCartItems);
      // call state update
      setShopCart({ items: updatedCartItems, total });

      // call notifs
      notif?.openNotification(
        "Item has been added to Cart!",
        `${product.title} has been added to the Shopping Cart!`
      );
    },
    [shopCart]
  );

  return { addToCart, shopCart };
}
