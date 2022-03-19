import { resourceConstants } from 'sapredux/constants';

export const cart = (state = [], {type, payload}: any) => {
  let doesItemExist;
  switch (type) {
    case resourceConstants.ADDED_TO_CART:
      doesItemExist = false;
      const newState = state.map((item: any) => {
        if (item.id === payload) {
          item.quantity += 1;
          doesItemExist = true;
        }
        return item;
      });
      if (doesItemExist) {
        return newState;
      }
      return [...state, {id: payload, quantity: 1}];

    case resourceConstants.REMOVED_FROM_CART:
      let shouldItemExist = true;
      const removingState = state.map((item: any) => {
        if (item.id === payload) {
          item.quantity -= 1;
          if (item.quantity <= 0) {
            shouldItemExist = false;
          }
        }
        return item;
      });
      if (shouldItemExist) {
        return removingState;
      }
      const newCartState = state.filter((item: any) => {
        if (item.id === payload) {
          return false;
        }
        return true;
      });
      return newCartState;

    case resourceConstants.ALL_REMOVED_FROM_CART:
      const removingCartState = state.filter((item: any) => {
        if (item.id === payload) { return false } return true
      })
      return removingCartState
    
    
    default:
      return state;
  }
};


export default cart;