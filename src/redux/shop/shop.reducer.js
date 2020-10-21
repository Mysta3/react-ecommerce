import SHOP_DATA from './shopData'

import ShopActionTypes from './shop.types';

//declare initial state
const INITIAL_STATE = {
    //points to shop data
    collections: SHOP_DATA
};


const shopReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;