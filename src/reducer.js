const stateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    }

    case "REMOVE_FROM_CART": {

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `This product ID = ` + action.id + ` does not exists in cart`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    }

    default: {
      return state;
    }
  }
};

export default stateReducer;
