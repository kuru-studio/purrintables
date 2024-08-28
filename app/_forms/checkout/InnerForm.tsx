import Atom from "@/app/_components/atoms";
import { Button, Card, Divider, Radio } from "antd";
import { FormikProps } from "formik";

interface CheckoutSummaryValues {
  delivery: "standard" | "express";
  length: number;
  total: number;
}

export const InnerForm = ({
  length,
  total,
  handleChange,
  handleSubmit,
  values,
}: FormikProps<CheckoutSummaryValues> & CheckoutSummaryValues) => {
  const deliveryPrice = values["delivery"] == "standard" ? 100 : 200;
  const formattedTotal = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(deliveryPrice + total);
  const formattedSubTotal = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(total);

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="w-[30%]"
    >
      <Card title="Delivery">
        <article className="flex flex-col gap-2">
          <Card type="inner">
            <article className="flex flex-row justify-between items-center">
              <Radio
                onChange={handleChange}
                value={"standard"}
                name="delivery"
                checked={values["delivery"] == "standard"}
              >
                <span>Standard Shipping</span>
              </Radio>
              <span>+&#8369;100.00</span>
            </article>
          </Card>
          <Card type="inner">
            <article className="flex flex-row justify-between items-center">
              <Radio
                onChange={handleChange}
                value={"express"}
                name="delivery"
                checked={values["delivery"] == "express"}
              >
                <span>Express Shipping</span>
              </Radio>
              <span>+&#8369;200.00</span>
            </article>
          </Card>
        </article>
        <Divider />
        <article>
          <h1 className="font-bold">Order Summary</h1>
          <section className="mt-6 flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <p>{length} items</p>
              <p>&#8369;{formattedSubTotal}</p>
            </div>
            <div className="flex flex-row justify-between">
              <Atom.Visibility state={values["delivery"] == "standard"}>
                <p>Standard Shipping</p>
                <p>&#8369;100.00</p>
              </Atom.Visibility>
              <Atom.Visibility state={values["delivery"] == "express"}>
                <p>Express Shipping</p>
                <p>&#8369;200.00</p>
              </Atom.Visibility>
            </div>
            <div className="flex flex-row justify-between text-xl font-bold">
              <p>Total</p>
              <p>&#8369;{formattedTotal}</p>
            </div>
          </section>
        </article>
        <Button htmlType="submit" disabled={!length} className="mt-6" type="primary" block>
          Checkout
        </Button>
      </Card>
    </form>
  );
};
