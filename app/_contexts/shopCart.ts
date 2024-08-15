import { atom } from "jotai";
import { Product } from "../_types/product";

export const shopCartAtom = atom<Product[]>([]);
