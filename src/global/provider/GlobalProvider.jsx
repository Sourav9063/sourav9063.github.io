import React, { useState, createContext, useContext } from "react";

export const GlobalContext = createContext();
export default function GlobalProvider({ children }) {
  const [scrollPositionOfElement, setScrollPositionOfElement] = useState(0);
  return (
    <GlobalContext.Provider
      value={{ scrollPositionOfElement, setScrollPositionOfElement }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useScrollPosition = () => {
  const { scrollPositionOfElement, setScrollPositionOfElement } =
    useContext(GlobalContext);
  return [scrollPositionOfElement, setScrollPositionOfElement];
};
