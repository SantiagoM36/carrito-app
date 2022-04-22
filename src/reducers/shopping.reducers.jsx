import { INIT_PRODUCTS, INIT_CART, ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, FILTER_PRODUCTS, FILTER_PRODUCT } from "../actions/types";
import { STORAGE_PRODUCTS_CART } from "../utils/constants";

const initialValue = {
    products: [],
    filter: [],
    sort: [],
    cart: []
}

export const shoppingReducer = (state = initialValue, action) => {
    switch (action.type) {
        case INIT_PRODUCTS:
            return {...state, products: action.payload.products}

        case INIT_CART:
            return {...state, cart: [...action.payload]}

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

        case FILTER_PRODUCTS:
            
            let { products } = state;

            if(!products) return [];

            let product = '';

            if(action.payload.length >= 2) {
                product = action.payload
            } else {
                product = ''
            }

            
            const productsState = [...products];
            let productSearch = product;
            let result;
            
            
            if (productSearch !== '') {
                result = productsState.filter(product => (product.name.toLowerCase().indexOf(productSearch.toLowerCase()) !== -1))
            } else {
                result = [];
            }

            return {...state, filter: result}

            case FILTER_PRODUCT:
                
                const productState = [...state.products];
                const productFilter = [...state.filter];
                let pSearch = action.payload;
                let rSearch;
                
                const OPTION = {
                    'default': () => [],
                    'low': () => !productFilter.length ? productState.sort((a, b) => a.price - b.price) : productFilter.sort((a, b) => a.price - b.price),
                    'high': () => !productFilter.length ? productState.sort((a, b) => b.price - a.price) : productFilter.sort((a, b) => b.price - a.price),
                    'asc': () => !productFilter.length ? productState.sort((a, b) => b.name.split(' ')[0].localeCompare(a.name.split(' ')[0])) : productFilter.sort((a, b) => b.name.split(' ')[0].localeCompare(a.name.split(' ')[0])),
                    'desc': () => !productFilter.length ? productState.sort((a, b) => a.name.split(' ')[0].localeCompare(b.name.split(' ')[0])) : productFilter.sort((a, b) => a.name.split(' ')[0].localeCompare(b.name.split(' ')[0]))
                }
                
                rSearch = OPTION[pSearch]();

                
                /*if (pSearch === 'low') {
                    rSearch = !productFilter.length ? productState.sort((a, b) => a.price - b.price) : productFilter.sort((a, b) => a.price - b.price)
                } else if (pSearch === 'high'){
                    rSearch = !productFilter.length ? productState.sort((a, b) => b.price - a.price) : productFilter.sort((a, b) => b.price - a.price)
                } else if (pSearch === 'asc') {
                    rSearch = !productFilter.length ? productState.sort((a, b) => b.name.split(' ')[0].localeCompare(a.name.split(' ')[0])) : productFilter.sort((a, b) => b.name.split(' ')[0].localeCompare(a.name.split(' ')[0]))
                } else if (pSearch === 'desc') {
                    rSearch = !productFilter.length ? productState.sort((a, b) => a.name.split(' ')[0].localeCompare(b.name.split(' ')[0])) : productFilter.sort((a, b) => a.name.split(' ')[0].localeCompare(b.name.split(' ')[0]))
                } else {
                    rSearch = []
                }*/

            return {...state, sort: rSearch}
        default:
            return state
    }
}