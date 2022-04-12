import { INIT_PRODUCTS, INIT_CART } from "./types";

export const initProducts = list => ({type: INIT_PRODUCTS, payload: {products: list}})

export const initCart = cart => ({type: INIT_CART, payload: cart})