import React, { createContext, useState } from "react";

const SharedValueContext = createContext();

const SharedValueProvider = ({ children }) => {
  const [victoryX, setVictoryX] = useState(0);
  const [victoryO, setVictoryO] = useState(0);

  return (
    <SharedValueContext.Provider
      value={{ victoryX, setVictoryX, victoryO, setVictoryO }}
    >
      {children}
    </SharedValueContext.Provider>
  );
};

export { SharedValueContext, SharedValueProvider };
