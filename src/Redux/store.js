import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import authReducer from "./Auth/Reducer";
import customerProductReducer from "./Customers/Product/Reducer";
// import productReducer from "./Admin/Product/Reducer";
import cartReducer from "./Customers/Cart/Reducer";
import { orderReducer } from "./Customers/Order/Reducer";
import adminOrderReducer from "./Admin/Orders/Reducer";
import thunk from "redux-thunk";


const rootReducers=combineReducers({

    auth:authReducer,
    customersProduct:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,

    // admin
    // adminsProduct:productReducer,
    adminsOrder:adminOrderReducer,


});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))