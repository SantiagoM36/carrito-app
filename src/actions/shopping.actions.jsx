import { INIT_PRODUCTS, INIT_CART, FILTER_PRODUCTS, FILTER_PRODUCT } from "./types";

export const initProducts = list => ({type: INIT_PRODUCTS, payload: {products: list}})

export const initCart = cart => ({type: INIT_CART, payload: cart})

export const filterProducts = item => ({type: FILTER_PRODUCTS, payload: item})
export const filterProduct = item => ({type: FILTER_PRODUCT, payload: item})