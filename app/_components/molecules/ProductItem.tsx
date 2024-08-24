import { Product } from "@/app/_types/product";
import Atom from "@atom";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import Image from "next/image";
import { MouseEvent } from "react";

interface Props extends Product {
  isAddToCart?: boolean;
  dispatchProduct?: (product: Product) => void;
}

export default function ProductItem({
  id,
  thumbnail,
  title,
  price,
  isSoldOut,
  link,
  isAddToCart,
  dispatchProduct,
}: Props) {
  const addToCartIcon = (
    <FontAwesomeIcon icon={faCartPlus} className="w-5 h-5 text-primary cursor-pointer" />
  );

  function onClickHandler(event: MouseEvent<HTMLButtonElement>) {
    const product: Product = {
      id,
      thumbnail,
      title,
      price,
      isSoldOut,
      link,
    };
    // avoids redirect on click, since parent is a link
    event.preventDefault();
    // dispatch product to parent, some Products dont have add to cart buttons
    dispatchProduct && dispatchProduct(product);
  }
  return (
    <article>
      <a className="inline-block m-5" href={link}>
        <figure className="w-40 md:w-60 xl:w-80 aspect-square relative mb-4">
          <Image className="w-full h-full" src={thumbnail} alt={title} />
          <Atom.Visibility state={isSoldOut}>
            <div
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
              style={{ backgroundColor: "rgba(255,255,255,.75)" }}
            >
              <div className="bg-[#df56c0] w-28 h-28 rounded-full text-white flex items-center flex-col justify-center uppercase">
                <div>Sold</div>
                <div>Out</div>
              </div>
            </div>
          </Atom.Visibility>
        </figure>
        <section className="flex flex-row justify-between items-end">
          <div className="text-left">
            <div className="font-bold text-xl mb-2">{title}</div>
            <div className="text-base text-gray-600">₱{price}</div>
          </div>
          <Atom.Visibility state={isAddToCart}>
            <Button
              disabled={isSoldOut}
              shape="circle"
              icon={addToCartIcon}
              onClick={onClickHandler}
            />
          </Atom.Visibility>
        </section>
      </a>
    </article>
  );
}
