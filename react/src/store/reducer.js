const initialState = {
  cart: { total: 0, quantity: 0 },
};

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_PRODUCT') {
    return {
      ...state,
      cart: {
        total: state.cart.total + 1,
        quantity: state.cart.total + 1,
      },
    };
  }
  if (action.type === 'REMOVE_PRODUCT') {
    if (state.cart.total > 0) {
      return {
        ...state,
        cart: {
          total: state.cart.total - 1,
          quantity: state.cart.total - 1,
        },
      };
    }
  }
  return state;
};

export default reducer;
