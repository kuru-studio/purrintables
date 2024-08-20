import { useAtom } from "jotai";
import { getProductQuantity, getTotalPrice } from "../_utilities/cartUtils";
import { Product } from "../_types/product";
import { shopCartAtom } from "../_contexts/shopCart";
import { useCallback, useContext } from "react";
import { NotificationContext } from "../_contexts/notification";

export function useCartActions() {
  const notif = useContext(NotificationContext);
  const [shopCart, setShopCart] = useAtom(shopCartAtom);

  const addToCart = useCallback(
    (product: Product) => {
      const notifMessage = {
        message: "Item has been added to Cart!",
        description: `${product.title} has been added to the Shopping Cart!`,
      };

      // get productQuantity, if 0 it's a new cartItem
      const productQuantity = getProductQuantity(product.id, shopCart.items);
      // add +1 since we are adding a new item on the cart
      const newQuantity = productQuantity + 1;

      const updatedCartItems = shopCart.items.map((item) => {
        // if item exists on the cart, we update the quantity instead of adding new item
        if (item.id === product.id) {
          return {
            ...item,
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

      // compute total price
      const total = getTotalPrice(updatedCartItems);
      // call state update
      setShopCart({ items: updatedCartItems, total });
      notif?.openNotification(notifMessage.message, notifMessage.description);
    },
    [shopCart]
  );

  return { addToCart, shopCart };
}
