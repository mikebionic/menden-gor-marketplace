import { resourceConstants } from 'sapredux/constants';

const updateCartItems = (cartItems: any, item: any, idx: number) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (resource: any, item: any, quantity: number) => {

  const {
    id = resource.id,
    count = 0,
    title = resource.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*resource.price
  };
};

const updateOrder = (state: any, resourceId: number, quantity: number) => {
  console.log("state is", state)
  const { resources, shoppingCart: { cartItems }} = state;
  console.log(resources)

  const resource = resources.find(({id}:any) => id === resourceId);
  const itemIndex = cartItems.findIndex(({id}:any) => id === resourceId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(resource, item, quantity);
  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};


const initialState = {
	shoppingCart: {
		cartItems: [],
		orderTotal: 0
	},
	orderTotal: 0,
};

export const cart = (state: any, action: {[name: string]: any}) => {

  if (state === undefined) {
    return initialState
  }

  switch(action.type) {
    case resourceConstants.ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case resourceConstants.REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);

    case resourceConstants.ALL_REMOVED_FROM_CART:
      const itemCount = state.shoppingCart.cartItems.find(({id}: any) => id === action.payload.count) || 0;
      return updateOrder(state, action.payload, itemCount);

    default:
      return state;
  }
};