import { useEffect, useState } from "react";
import { useScrollPosition } from "../../provider/GlobalProvider";
export const useRangeScroll = ({
  initPosition,
  effect = ({
    scrollPosition,
    setScrollPosition,
    scrollPositionOfElement,
  }) => {},
}) => {
  const [scrollPosition, setScrollPosition] = useState(initPosition);
  const [scrollPositionOfElement] = useScrollPosition();

  useEffect(() => {
    effect({ setScrollPosition, scrollPositionOfElement });
    return () => {};
  }, [scrollPositionOfElement]);
  return {
    scrollPosition,
    setScrollPosition,
  };
};
