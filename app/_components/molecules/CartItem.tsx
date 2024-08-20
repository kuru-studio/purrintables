import { Button, Card } from "antd";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { InputNumber } from "antd";
import { CartItem as CartItemType } from "@/app/_types/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent } from "react";

interface Props {
  item: CartItemType;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onRemove }: Props) {
  const removeIcon = (
    <FontAwesomeIcon icon={faRemove} className="w-5 h-5 text-primary cursor-pointer" />
  );
  function onRemoveHandler(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    onRemove(item.id);
  }
  return (
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
          <Button shape="circle" icon={removeIcon} onClick={onRemoveHandler} />
        </div>
        <span className="text-primary font-bold">&#8369;{item.subtotal}</span>
      </article>
    </Card>
  );
}
