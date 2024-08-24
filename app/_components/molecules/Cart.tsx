"use client";
import { Drawer, Empty, List } from "antd";
import Atom from "../atoms";
import { useCartActions } from "@/app/_hooks/useCartActions";
import Molecule from "../molecules";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Cart({ isOpen, setIsOpen }: Props) {
  const { shopCart, removeToCart, updateQty } = useCartActions();

  return (
    <Drawer title="Cart" onClose={() => setIsOpen(false)} open={isOpen}>
      <Atom.Visibility state={!shopCart.items.length}>
        <Empty description="Your cart is empty." />
      </Atom.Visibility>
      <Atom.Visibility state={shopCart.items.length}>
        <List
          size="small"
          grid={{ gutter: 0, column: 1 }}
          itemLayout="horizontal"
          dataSource={shopCart.items}
          renderItem={(item) => (
            <List.Item>
              <Molecule.CartItem item={item} onRemove={removeToCart} onUpdateQty={updateQty} />
            </List.Item>
          )}
        />
        <h1>Total: {shopCart.total}</h1>
      </Atom.Visibility>
    </Drawer>
  );
}
