"use client";
import Molecule from "@/app/_components/molecules";
import { useCartActions } from "@/app/_hooks/useCartActions";
import { Card, Divider, List, Radio } from "antd";

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
      <section className="w-[30%]">
        <Card title="Delivery">
          <article className="flex flex-col gap-2">
            <Card type="inner">
              <article className="flex flex-row justify-between items-center">
                <Radio name="delivery" checked>
                  <span>Standard Shipping</span>
                </Radio>
                <span>+&#8369;100.00</span>
              </article>
            </Card>
            <Card type="inner">
              <article className="flex flex-row justify-between items-center">
                <Radio name="delivery">
                  <span>Express Shipping</span>
                </Radio>
                <span>+&#8369;150.00</span>
              </article>
            </Card>
          </article>
          <Divider />
          <article>
            <h1 className="font-bold">Order Summary</h1>
            <section className="mt-6 flex flex-col gap-4">
              <div className="flex flex-row justify-between">
                <p>{shopCart.items.length} items</p>
                <p>&#8369;{shopCart.total}</p>
              </div>
              <div className="flex flex-row justify-between">
                <p>Standard Shipping</p>
                <p>&#8369;100.00</p>
              </div>
              <div className="flex flex-row justify-between text-xl font-bold">
                <p>Total</p>
                <p>&#8369;100.00</p>
              </div>
            </section>
          </article>
        </Card>
      </section>
    </article>
  );
}
