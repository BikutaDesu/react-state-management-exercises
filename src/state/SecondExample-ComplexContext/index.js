import React, { createContext, useContext, useReducer } from "react";
import { initialState, stateReducer } from "./reducer";

// Contexto
export const ComplexContext = createContext();

// Provider
export const ComplexContextProvider = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <ComplexContext.Provider value={[state, dispatch]}>
      {children}
    </ComplexContext.Provider>
  );
};

export const useComplexContexHook = () => {
  const [state, dispatch] = useContext(ComplexContext);

  return [state, dispatch];
};
