import React, { useState, useEffect, useCallback } from "react";

import { FaAngleUp } from "react-icons/fa";

import "./ScrollTotop.scss";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={"scroll-to-top" + (isVisible ? " scroll-to-top_visible" : "")}
      onClick={scrollToTop}
    >
      <FaAngleUp />
    </div>
  );
};

export default ScrollToTop;
