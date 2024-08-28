"use client";
import { Button, Divider, Drawer, Empty, List } from "antd";
import Atom from "../atoms";
import { useCartActions } from "@/app/_hooks/useCartActions";
import Molecule from "../molecules";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Cart({ isOpen, setIsOpen }: Props) {
  const { shopCart, removeToCart, updateQty } = useCartActions();

  return (
    <Drawer
      className="overflow-scroll"
      footer={
        <Atom.Visibility state={shopCart.items.length}>
          <div className="flex flex-col gap-6 pb-6">
            <h1 className="font-bold text-xl">&#8369; {shopCart.total}</h1>
            <a href={"/shop/checkout"}>
              <Button type="primary" block>
                Checkout
              </Button>
            </a>
          </div>
        </Atom.Visibility>
      }
      title={
        <div className="flex flex-row justify-between items-center">
          <h4>Cart</h4>
          <Atom.Visibility state={shopCart.items.length}>
            <article className="text-neutral-400">
              {shopCart.items.length > 1 && <p>{shopCart.items.length} items</p>}
              {shopCart.items.length == 1 && <p>{shopCart.items.length} item</p>}
            </article>
          </Atom.Visibility>
        </div>
      }
      onClose={() => setIsOpen(false)}
      open={isOpen}
    >
      <Atom.Visibility state={!shopCart.items.length}>
        <Empty description="Your cart is empty." />
      </Atom.Visibility>
      <Atom.Visibility state={shopCart.items.length}>
        <article className="flex flex-col justify-between items-center">
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
        </article>
      </Atom.Visibility>
    </Drawer>
  );
}
