import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Hero />
      <Products />
    </>
  );
};

export default App;
