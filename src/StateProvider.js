
import { createContext, useContext, useReducer } from 'react';
import stateReducer from './reducer';

const StateContext = createContext(null);
const StateDispatchContext = createContext(null);
  
const initialState = {
    basket: []
};

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(
    stateReducer,
    initialState
  );

  return (
    <StateContext.Provider value={state}>
      <StateDispatchContext.Provider value={dispatch}>
        {children}
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useStateContext() {
  return useContext(StateContext);
}

export function useStateDispatchContext() {
  return useContext(StateDispatchContext);
}

export function getCartTotal(basket) {
    return (basket?.reduce((amount, item) => item.price + amount, 0));
}
