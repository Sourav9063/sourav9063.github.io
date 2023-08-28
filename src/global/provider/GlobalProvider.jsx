import React, { useState, createContext, useContext, useEffect } from "react";
import styles from "../../pages/home/Home.module.css";
export const GlobalContext = createContext();
export default function GlobalProvider({ children }) {
  const [scrollPositionOfElement, setScrollPositionOfElement] = useState(0);
  const tmp2 = 0;
  const handleScroll = (e) => {
    const setScrollPositionOfElementTmp =
      (e.target.firstChild.getBoundingClientRect().top /
        e.target.firstChild.getBoundingClientRect().height) *
      100 *
      -1;
    if (
      (Math.abs(tmp2 - setScrollPositionOfElementTmp) > 5 ||
        Math.ceil(setScrollPositionOfElementTmp) % 100 === 0) &&
      Math.ceil(setScrollPositionOfElementTmp) !== Math.ceil(tmp2)
    ) {
      setScrollPositionOfElement(setScrollPositionOfElementTmp);
    }
  };

  useEffect(() => {
    document
      .querySelector("." + styles.container)
      ?.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
