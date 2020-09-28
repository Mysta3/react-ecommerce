import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


//create collection map to identify string to id values
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};



const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);


//returns a curried function
//a function that return another function
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  ));
