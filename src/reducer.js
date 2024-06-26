
const stateReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART': {
          return {
              ...state,
              basket: [...state.basket, action.item]
          }
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  export default stateReducer;