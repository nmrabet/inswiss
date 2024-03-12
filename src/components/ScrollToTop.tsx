"use client"

import useScrollTop from "@/hooks/use-scroll-top";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { stick, onClickHandler } = useScrollTop();
  if (stick) {
    return (
      <button id="scrollUp" className="scroll-top" onClick={onClickHandler}>
        <span>
          <FaAngleUp size={40}/>
        </span>
      </button>
    );
  }
  return null;
};

export default ScrollToTop;
