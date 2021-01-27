/* eslint-disable import/no-anonymous-default-export */
let initialState = {
  cart: [],
};

export const addToCart = product => {
  return {
    type: 'ADD',
    payload: product,
  };
};

export const removeFromCart = product => {
  return {
    type: 'REMOVE',
    payload: product,
  };
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ADD':
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case 'REMOVE':
      state.cart.forEach((item) => {
        if (item.name === payload) state.cart.splice(item, 1);
      })
      console.log('New cart, who dis?', state);
      return {
        ...state,
        cart: [...state.cart],
      };
    default:
      return state;
  }
};
