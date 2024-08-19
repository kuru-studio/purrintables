"use client";
import { Product } from "@/app/_types/product";
import Molecule from "../molecules";
import { useAtom } from "jotai";
import { shopCartAtom } from "@/app/_contexts/shopCart";
import { NotificationContext } from "@/app/_contexts/notification";
import { useContext } from "react";
import { Cart, CartItem } from "@/app/_types/cart";
import { getTotalPrice, getProductQuantity } from "@/app/_utilities/cartUtils";

interface Props {
  title: string;
  productArray: Product[];
  isAddtoCart?: boolean; // some Shops (like on the homepage) dont have add to cart actions
}

export default function Shop({ title, productArray, isAddtoCart = false }: Props) {
  const notif = useContext(NotificationContext);
  const [shopCart, setShopCart] = useAtom(shopCartAtom);

  // updates shopCart upon dispatch
  function onAddToCart(product: Product) {
    const notifMessage = {
      message: "Item has been added to Cart!",
      description: `${product.title} has been added to the Shopping Cart!`,
    };

    const productQuantity = getProductQuantity(product.id, shopCart.items);
    const quantity = 1 + productQuantity;

    // if a product does not exist create a new cartItem
    if (!productQuantity) {
      const item: CartItem = { ...product, quantity: 1, subtotal: product.price };
      const cartItems: CartItem[] = [...shopCart.items, item];
      const total = getTotalPrice(cartItems);
      setShopCart({ items: cartItems, total: total });
      // if a product does exist update the quantity
    } else {
      const filteredArr = shopCart.items.filter((item) => {
        return item.id !== product.id;
      });
      const updatedItem: CartItem = { ...product, quantity, subtotal: product.price * quantity };
      const cartItems: CartItem[] = [...filteredArr, updatedItem];
      const total = getTotalPrice(cartItems);
      setShopCart({ items: cartItems, total: total });
    }

    // call openNotification function from notif ctx
    notif?.openNotification(notifMessage.message, notifMessage.description);
  }

  return (
    <div className="container mx-auto text-2xl py-10 px-5">
      <h4 className="font-bold text-center mb-5">{title}</h4>
      <div className="flex flex-wrap justify-center">
        {productArray.map((product: Product) => {
          return (
            <Molecule.ProductItem
              key={product.id}
              id={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              price={product.price}
              isSoldOut={product.isSoldOut}
              link={product.link}
              isAddToCart={isAddtoCart}
              dispatchProduct={onAddToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
