import { combineReducers } from "redux";
import { shoppingReducer } from "./shopping.reducers";

const reducer = combineReducers({
    iceCreams: shoppingReducer
})

export default reducer;