import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";
import styles from "../../pages/home/Home.module.css";
export const GlobalContext = createContext();
let temp = 0;
export default function GlobalProvider({ children }) {
  const [scrollPositionOfElement, setScrollPositionOfElement] = useState(0);
  const handleScroll = useCallback((e) => {
    const setScrollPositionOfElementTmp = Math.ceil(
      (e.target.firstChild.getBoundingClientRect().top /
        e.target.firstChild.getBoundingClientRect().height) *
        100 *
        -1
    );
    if (
      Math.abs(temp - setScrollPositionOfElementTmp) > 5 ||
      setScrollPositionOfElementTmp % 100 < 5 ||
      setScrollPositionOfElementTmp % 100 < 95
    ) {
      temp = setScrollPositionOfElementTmp;
      if (Math.abs(scrollPositionOfElement - setScrollPositionOfElementTmp) > 5)
        setScrollPositionOfElement(setScrollPositionOfElementTmp);
    }
  }, []);

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
