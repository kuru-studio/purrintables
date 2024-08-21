import { Button, Card } from "antd";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { InputNumber } from "antd";
import { CartItem as CartItemType } from "@/app/_types/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, MouseEvent, useState } from "react";

interface Props {
  item: CartItemType;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, action: "add" | "remove" | "update", value?: number) => void;
}

export default function CartItem({ item, onRemove, onUpdateQty }: Props) {
  const removeIcon = (
    <FontAwesomeIcon icon={faTrashCan} className="w-5 h-5 text-primary cursor-pointer" />
  );
  const plusIcon = (
    <FontAwesomeIcon icon={faPlus} className="w-5 h-5 text-primary cursor-pointer" />
  );

  const minusIcon = (
    <FontAwesomeIcon icon={faMinus} className="w-5 h-5 text-primary cursor-pointer" />
  );

  function onRemoveHandler(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    onRemove(item.id);
  }

  function onUpdateQtyBtnHandler(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (event.currentTarget.id == "add") onUpdateQty(item.id, "add");
    if (event.currentTarget.id == "remove") onUpdateQty(item.id, "remove");
  }

  function onUpdateQtyHandler(value: number | null) {
    if (value) onUpdateQty(item.id, "update", value);
  }

  return (
    <Card className="hover:bg-neutral-100">
      <header className="flex flex-row justify-between items-center">
        <h1 className="font-bold">{item.title}</h1>
        <span className="text-primary font-bold">&#8369;{item.subtotal}</span>
      </header>
      <article className="flex flex-row justify-center items-center gap-6 w-full mt-3">
        <Image width={75} height={75} src={item.thumbnail} alt="img" />
        <div className="flex flex-row justify-center items-center gap-2">
          <span className="flex flex-row justify-center items-center gap-2">
            <Button
              id="add"
              size="small"
              shape="circle"
              icon={plusIcon}
              onClick={onUpdateQtyBtnHandler}
            />
            <InputNumber
              size="small"
              className="w-12 h-10 flex flex-col justify-center"
              min={1}
              defaultValue={item.quantity}
              value={item.quantity}
              controls={false}
              onChange={onUpdateQtyHandler}
            />
            <Button
              id="remove"
              size="small"
              shape="circle"
              disabled={item.quantity <= 1}
              icon={minusIcon}
              onClick={onUpdateQtyBtnHandler}
            />
          </span>

          <Button shape="circle" icon={removeIcon} onClick={onRemoveHandler} />
        </div>
      </article>
    </Card>
  );
}
