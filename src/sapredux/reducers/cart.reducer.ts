// const updateCartItems = (cartItems, item, idx) => {

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

// const updateCartItem = (resource, item = {}, quantity) => {

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

// const updateOrder = (state, resourceId, quantity) => {
//   const { resourceList: { resources }, shoppingCart: { cartItems }} = state;

//   const resource = resources.find(({id}) => id === resourceId);
//   const itemIndex = cartItems.findIndex(({id}) => id === resourceId);
//   const item = cartItems[itemIndex];

//   const newItem = updateCartItem(resource, item, quantity);
//   return {
//     orderTotal: 0,
//     cartItems: updateCartItems(cartItems, newItem, itemIndex)
//   };
// };

// const updateShoppingCart = (state, action) => {

//   if (state === undefined) {
//     return {
//       cartItems: [],
//       orderTotal: 0
//     }
//   }

//   switch(action.type) {
//     case 'RESOURCE_ADDED_TO_CART':
//       return updateOrder(state, action.payload, 1);

//     case 'RESOURCE_REMOVED_FROM_CART':
//       return updateOrder(state, action.payload, -1);

//     case 'RESOURCE_ALL_REMOVED_FROM_CART':
//       const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
//       return updateOrder(state, action.payload, -item.count);

//     default:
//       return state.shoppingCart;
//   }
// };

const updateShoppingCart = () => {}
export default updateShoppingCart;
