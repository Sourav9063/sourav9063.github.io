import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import styles from "../../pages/home/Home.module.css";
export const GlobalContext = createContext();
export default function GlobalProvider({ children }) {
  const temp = useRef(0);
  const [scrollPositionOfElement, setScrollPositionOfElement] = useState(0);
  const handleScroll = useCallback((e) => {
    const setScrollPositionOfElementTmp = Math.ceil(
      (e.target.firstChild.getBoundingClientRect().top /
        e.target.firstChild.getBoundingClientRect().height) *
        100 *
        -1
    );
    if (Math.abs(temp.current - setScrollPositionOfElementTmp) > 5) {
      let rounded = setScrollPositionOfElementTmp;
      if (
        setScrollPositionOfElementTmp % 100 < 8 ||
        setScrollPositionOfElementTmp % 100 > 92
      ) {
        rounded = Math.round(setScrollPositionOfElementTmp / 100) * 100;
      }
      if (rounded !== temp.current) {
        setScrollPositionOfElement(rounded);
        console.log(rounded);
      }
      temp.current = rounded;
    }
  }, []);

  useLayoutEffect(() => {
    document
      .querySelector("." + styles.container)
      ?.addEventListener("scroll", handleScroll);

    return () => {};
  }, [handleScroll]);
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

// const useScrollPositionSetup = () => {
//   const scrollElementRef = useRef();
//   let temp = 0;
//   const { scrollPositionOfElement, setScrollPositionOfElement } =
//     useContext(GlobalContext);
//   const handleScroll = useCallback((e) => {
//     const setScrollPositionOfElementTmp = Math.ceil(
//       (e.target.firstChild.getBoundingClientRect().top /
//         e.target.firstChild.getBoundingClientRect().height) *
//         100 *
//         -1
//     );
//     if (
//       Math.abs(temp - setScrollPositionOfElementTmp) > 5 ||
//       setScrollPositionOfElementTmp % 100 < 5 ||
//       setScrollPositionOfElementTmp % 100 < 95
//     ) {
//       temp = setScrollPositionOfElementTmp;
//       if (Math.abs(scrollPositionOfElement - setScrollPositionOfElementTmp) > 5)
//         setScrollPositionOfElement(setScrollPositionOfElementTmp);
//     }
//   }, []);

//   useEffect(() => {
//     console.log("first");
//     if (!scrollElementRef.current) {
//       console.log("first");
//       scrollElementRef.current = document.querySelector("." + styles.container);
//       scrollElementRef.current.addEventListener("scroll", handleScroll);
//     }
//     return () => {};
//   }, []);
//   return [scrollPositionOfElement, setScrollPositionOfElement];
// };
