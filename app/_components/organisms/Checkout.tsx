"use client";
import Molecule from "@/app/_components/molecules";
import { useCartActions } from "@/app/_hooks/useCartActions";
import { List } from "antd";
import Form from "@/app/_forms";

export default function Checkout() {
  const { shopCart, removeToCart, updateQty } = useCartActions();
  return (
    <article className="my-6 flex flex-row gap-2">
      <section className="w-[70%] p-6">
        <List
          grid={{ gutter: 0, column: 1 }}
          itemLayout="horizontal"
          dataSource={shopCart.items}
          renderItem={(item) => (
            <List.Item>
              <Molecule.CheckoutItem item={item} onRemove={removeToCart} onUpdateQty={updateQty} />
            </List.Item>
          )}
        />
      </section>
      <Form.Checkout length={shopCart.items.length} total={shopCart.total} />
    </article>
  );
}
