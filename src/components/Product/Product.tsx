import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";

import { ProductModel } from "../../models/product";

import { CartState } from "../../store/reducer";
import * as actionCreators from "../../store/actionCreators";

import "./Product.scss";

interface ProductProps {
  product: ProductModel;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state: CartState) => state.cart);

  const checkIsInCart = useCallback(() => {
    if (cart.find((item) => item.id === product.id)) {
      return true;
    }
    return false;
  }, [cart, product]);

  const [isInCart, setIsInCart] = useState(checkIsInCart);

  const addToCart = useCallback(() => {
    if (isInCart) {
      return;
    } else {
      dispatch(actionCreators.addProductToCart(product));
      setIsInCart(true);
    }
  }, [dispatch, isInCart, product]);

  useEffect(() => {
    setIsInCart(checkIsInCart());
  }, [checkIsInCart]);

  return (
    <article className="product">
      <div className="product__img-container">
        <img src={product.image} alt="product" className="product__img" />
        <button className="product__bag-btn" onClick={addToCart}>
          <span className="product__cart-icon">
            <FaShoppingCart />
          </span>
          {isInCart ? "in cart" : "add to cart"}
        </button>
      </div>
      <h3>{product.title}</h3>
      <h4>${product.price}</h4>
    </article>
  );
};

export default Product;
