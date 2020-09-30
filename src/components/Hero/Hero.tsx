import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import * as scrollActionCreators from "../../store/actions/scrollActions/scrollActionCreators";

import "./Hero.scss";

const Hero: React.FC = () => {
  const dispatch = useDispatch();

  const scrollToProducts = useCallback(() => {
    dispatch(scrollActionCreators.scrollToProducts());
  }, [dispatch]);

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
