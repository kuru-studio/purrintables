"use client";
import { withFormik } from "formik";
import { InnerForm } from "./InnerForm";
import * as yup from "yup";

interface CheckoutSummaryValues {
  delivery: "standard" | "express";
  length: number;
  total: number;
}

const Checkout = withFormik({
  mapPropsToValues: (props: any): CheckoutSummaryValues => {
    return {
      delivery: "standard",
      length: props.length,
      total: props.total,
    };
  },

  validationSchema: yup.object().shape({
    delivery: yup.string().required("select a delivery method"),
  }),

  handleSubmit: (values) => {
    try {
      console.log("!!!");
      console.log(values);
    } catch (error: any) {}
  },
})(InnerForm);

export default Checkout;
