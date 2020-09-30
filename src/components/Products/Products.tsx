import React, { useState, useEffect } from "react";

import Product from "../Product/Product";

import { ProductModel } from "../../models/product";
import products from "../../data/productsList";

import "./Products.scss";

const Products: React.FC = () => {
  const [fetchedProducts, setFetchedProducts] = useState<ProductModel[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // request here
    setFetchedProducts(products);
    setIsFetching(false);
  }, []);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <section className="products">
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
