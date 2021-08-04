import React, { createContext, useContext, useState } from "react";

// Contexto
const SimpleContext = createContext();

// Provider
const SimpleContextProvider = (props) => {
  const { children } = props;

  const [state, setState] = useState({
    user: {
      name: "Victor",
      email: "victor.neves@teste.com",
    },
    job: "",
  });

  return (
    <SimpleContext.Provider value={[state, setState]}>
      {children}
    </SimpleContext.Provider>
  );
};

const useSimpleContextHook = () => {
  const [state, setState] = useContext(SimpleContext);

  return [state, setState]
}

export { SimpleContext, SimpleContextProvider, useSimpleContextHook };
