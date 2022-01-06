
import * as R from 'ramda'
import { resourceConstants } from 'sapredux/constants';

// const updateCartItems = (cartItems: any, item: any, idx: number) => {

//   if (item.count === 0) {
//     return [
//       ...cartItems.slice(0, idx),
//       ...cartItems.slice(idx + 1)
//     ];
//   }

//   if (idx === -1) {
//     return [
//       ...cartItems,
//       item
//     ];
//   }

//   return [
//     ...cartItems.slice(0, idx),
//     item,
//     ...cartItems.slice(idx + 1)
//   ];
// };

// const updateCartItem = (resource: any, item: any, quantity: number) => {

//   const {
//     id = resource.id,
//     count = 0,
//     title = resource.title,
//     total = 0 } = item;

//   return {
//     id,
//     title,
//     count: count + quantity,
//     total: total + quantity*resource.price
//   };
// };

// const updateOrder = (state: any, resourceId: number, quantity: number) => {
//   console.log("updating order state is", state)
//   const { resources, shoppingCart: { cartItems }} = state;
//   console.log(resources)
//   return state
//   // const resource = resources.find(({id}:any) => id === resourceId);
//   // const itemIndex = cartItems.findIndex(({id}:any) => id === resourceId);
//   // const item = cartItems[itemIndex];

//   // const newItem = updateCartItem(resource, item, quantity);
//   // return {
//   //   orderTotal: 0,
//   //   cartItems: updateCartItems(cartItems, newItem, itemIndex)
//   // };
// };


// const initialState = {
//   cartItems: [],
//   totalPrice: 0,
//   itemTotal: 0
// };

const initialState: any[] = []

export const cart = (state = initialState, {type, payload}: any) => {

  switch(type) {
    case resourceConstants.ADDED_TO_CART:
      console.log("cart reducer state ", state)
      return R.append(payload, state)
      // console.log("cart after appending state ", state)
      // return updateOrder(state, payload, 1);

    // case resourceConstants.REMOVED_FROM_CART:
    //   return updateOrder(state, payload, -1);

    // case resourceConstants.ALL_REMOVED_FROM_CART:
    //   const itemCount = state.shoppingCart.cartItems.find(({id}: any) => id === payload.count) || 0;
    //   return updateOrder(state, payload, itemCount);

    default:
      return state;
  }
};