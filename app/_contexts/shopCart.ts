import { atomWithStorage } from "jotai/utils";
import { Cart } from "../_types/cart";

export const shopCartAtom = atomWithStorage<Cart>("cart", { items: [], total: 0 });
