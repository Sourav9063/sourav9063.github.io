import { useCallback, useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../provider/GlobalProvider";

export const useScroll = () => {
  const { scrollPositionOfElement, setScrollPositionOfElement } =
    useContext(GlobalContext);
  const scrollElementRef = useRef();
  const temp = useRef(0);

  const handleScroll = useCallback((e) => {
    const setScrollPositionOfElementTmp = Math.ceil(
      (e.target.firstChild.getBoundingClientRect().top /
        e.target.firstChild.getBoundingClientRect().height) *
        100 *
        -1
    );
    if (
      Math.abs(temp.current - setScrollPositionOfElementTmp) > 5 ||
      setScrollPositionOfElementTmp % 100 < 5 ||
      setScrollPositionOfElementTmp % 100 > 95
    ) {
      let rounded = setScrollPositionOfElementTmp;
      if (
        setScrollPositionOfElementTmp % 100 < 8 ||
        setScrollPositionOfElementTmp % 100 > 92
      ) {
        rounded = Math.round(setScrollPositionOfElementTmp / 100) * 100;
      }
      if (rounded !== temp.current) {
        setScrollPositionOfElement(rounded);
      }
      temp.current = rounded;
    }
  }, []);
  useEffect(() => {
    scrollElementRef.current.addEventListener("scroll", handleScroll);
    return () => {};
  }, [handleScroll]);
  return {
    scrollPositionOfElement,
    setScrollPositionOfElement,
    scrollElementRef,
  };
};
