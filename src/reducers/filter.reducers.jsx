import { FILTER_PRODUCTS } from '../actions/types';

const initialState = {
    filter: []
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS:
            
            let result;

            if(action.payload >= 2) {
                result = action.payload
            } else {
                result = state.filter
            }
            
            return {...state, filter: result}
    
        default:
            return state;
    }
}