// BASE REDUCER OBJECT THAT REPS ALL STATE OF APPLICATION
// GLUE TO COMBINE ALL STATE TOGETHER
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

//use localStorage as default storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], //the reducers we want to persist
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
