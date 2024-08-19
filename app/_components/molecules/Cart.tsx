"use client";
import { Drawer, Empty } from "antd";
import { useAtom } from "jotai";
import { shopCartAtom } from "@/app/_contexts/shopCart";
import Atom from "../atoms";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Cart({ isOpen, setIsOpen }: Props) {
  const [shopCart, setShopCart] = useAtom(shopCartAtom);
  return (
    <Drawer title="Cart" onClose={() => setIsOpen(false)} open={isOpen}>
      <Atom.Visibility state={!shopCart.items.length}>
        <Empty description="Your cart is empty." />
      </Atom.Visibility>
      <Atom.Visibility state={shopCart.items.length}>
        {shopCart.items.map((item) => {
          return (
            <h1 key={item.id}>
              {item.title} x {item.quantity} = {item.quantity * item.price}
            </h1>
          );
        })}
        <h1>Total: {shopCart.total}</h1>
      </Atom.Visibility>
    </Drawer>
  );
}
