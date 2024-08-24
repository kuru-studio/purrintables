import { atom } from "jotai";
import { Cart } from "../_types/cart";

export const shopCartAtom = atom<Cart>({ items: [], total: 0 });
