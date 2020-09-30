import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Product from "../Product/Product";

import { ProductModel } from "../../models/product";
import products from "../../data/productsList";

import { RootState } from "../../store/store";

import "./Products.scss";

const Products: React.FC = () => {
  const productsSection = useRef<HTMLElement>(null!);

  const scrollToProducts = useSelector((state: RootState) => state.scrollState.scrollToProducts);

  const [fetchedProducts, setFetchedProducts] = useState<ProductModel[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // request here
    setFetchedProducts(products);
    setIsFetching(false);
  }, []);

  useEffect(() => {
    if (productsSection.current) {
      productsSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToProducts]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <section className="products" ref={productsSection}>
      <div className="products__title">
        <h2>our products</h2>
      </div>
      <div className="products__center">
        {fetchedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
