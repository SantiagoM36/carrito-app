import { INIT_PRODUCTS, INIT_CART, ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../actions/types";
import { STORAGE_PRODUCTS_CART } from "../utils/constants";

const initialValue = {
    products: [],
    cart: []
}

export const shoppingReducer = (state = initialValue, action) => {
    switch (action.type) {
        case INIT_PRODUCTS:
            return {...state, products: action.payload.products}

        case INIT_CART:
            return {...state, cart: [action.payload]}

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
        const searchOneProduct = product => product.id === action.payload;
        const removeOneItem = state.cart.find(searchOneProduct);
        
        localStorage.setItem(STORAGE_PRODUCTS_CART, JSON.stringify(removeOneItem))

        return removeOneItem.quantity > 1 
            ? {
                ...state, 
                cart: state.cart.map(item => item.id === action.payload 
                    ? {...item, quantity: item.quantity - 1} 
                    : item
                )
            }
            : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }

        case REMOVE_ALL_FROM_CART:

        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        }

        case CLEAR_CART:
            localStorage.removeItem(STORAGE_PRODUCTS_CART)
            
            return {...state, cart: initialValue.cart};

        default:
            return state
    }
}