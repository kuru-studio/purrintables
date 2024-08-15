"use client";
import { Product } from "@/app/_types/product";
import Molecule from "../molecules";
import { useAtom } from "jotai";
import { shopCartAtom } from "@/app/_contexts/shopCart";
import { useEffect } from "react";

interface Props {
  title: string;
  productArray: Product[];
  isAddtoCart?: boolean; // some Shops (like on the homepage) dont have add to cart actions
}

export default function Shop({ title, productArray, isAddtoCart = false }: Props) {
  const [_, setShopCart] = useAtom(shopCartAtom);
  // updates shopCart upon dispatch
  function onAddToCart(product: Product) {
    setShopCart((prevValue) => [...prevValue, product]);
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
