"use client";
import { Avatar, Card, Drawer, Empty, InputNumber, List } from "antd";
import { useAtom } from "jotai";
import { shopCartAtom } from "@/app/_contexts/shopCart";
import Atom from "../atoms";
import Image from "next/image";

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
        <List
          itemLayout="horizontal"
          dataSource={shopCart.items}
          renderItem={(item) => (
            <List.Item>
              <Card className="hover:bg-neutral-100">
                <article className="flex flex-row justify-center items-center gap-12">
                  <header className="flex flex-row justify-center items-center gap-4">
                    <Image width={50} src={item.thumbnail} alt="img" />
                    <h1 className="font-bold">{item.title}</h1>
                  </header>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <span>X</span>
                    <InputNumber
                      className="w-12 h-10 flex flex-col justify-center"
                      min={1}
                      defaultValue={item.quantity}
                      onChange={() => {}}
                    />
                  </div>
                  <span className="text-primary font-bold">&#8369;{item.subtotal}</span>
                </article>
              </Card>
            </List.Item>
          )}
        />
        <h1>Total: {shopCart.total}</h1>
      </Atom.Visibility>
    </Drawer>
  );
}
