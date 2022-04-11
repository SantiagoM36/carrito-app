import { INIT_PRODUCTS, ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../actions/types";
import { STORAGE_PRODUCTS_CART } from "../utils/constants";

const initialValue = {
    products: [],
    cart: []
}

export const shoppingReducer = (state = initialValue, action) => {
    switch (action.type) {
        case INIT_PRODUCTS:
            return {...state, products: action.payload.products}
        case ADD_TO_CART:
            const findIdProduct = product => product.id === action.payload.cart.id;
            const newItem = state.products.find(findIdProduct);
    
            localStorage.setItem(STORAGE_PRODUCTS_CART, JSON.stringify([...state.cart]))

            const findIdNewCart = item => item.id === newItem.id;
            let itemInCart = state.cart.find(findIdNewCart);

            return itemInCart
                ? {
                    ...state ,
                    cart: state.cart.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)
                }

                : {
                    ...state,
                    cart: [...state.cart, {...newItem, quantity: 1}]
                }
        case REMOVE_ONE_FROM_CART:
            
        //const product = state.cart.filter(product => product.id !== action.payload.cart.id);
        
        console.log('Product clear: ', state)
        //localStorage.setItem(STORAGE_PRODUCTS_CART, JSON.stringify(product))
        //return {...state, cart: product}
    
        default:
            return state
    }
}