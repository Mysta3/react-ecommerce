// BASE REDUCER OBJECT THAT REPS ALL STATE OF APPLICATION
// GLUE TO COMBINE ALL STATE TOGETHER


import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


export default combineReducers({
    user: userReducer,
    cart: cartReducer
})