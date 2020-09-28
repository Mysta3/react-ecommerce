import SHOP_DATA from './shopData'

//declare initial state
const INITIAL_STATE = {
    //points to shop data
    collections: SHOP_DATA
};


const shopReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state;
    }
};

export default shopReducer;