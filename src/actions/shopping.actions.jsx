import { INIT_PRODUCTS, INIT_CART, ADD_TO_CART, REMOVE_ONE_FROM_CART, REMOVE_ALL_FROM_CART, CLEAR_CART } from "./types";

export const initProducts = list => ({type: INIT_PRODUCTS, payload: {products: list}})

export const initCart = cart => ({type: INIT_CART, payload: cart})

export const addToCart = product => ({type: ADD_TO_CART, payload: product});

export const removeProductFromCart = (id, all = false) => 
    all 
        ? ({type: REMOVE_ALL_FROM_CART, payload: id}) 
        : ({type: REMOVE_ONE_FROM_CART, payload: id});

export const clearCart = () => ({type: CLEAR_CART});