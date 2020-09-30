import React, { useCallback } from "react";

import "./Hero.scss";

const Hero: React.FC = () => {
  const scrollToProducts = useCallback(() => {
    document.querySelector(".products")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header className="hero">
      <div className="hero__banner">
        <h1 className="hero__banner-title">furniture collection</h1>
        <button className="btn" onClick={scrollToProducts}>
          shop now
        </button>
      </div>
    </header>
  );
};

export default Hero;
