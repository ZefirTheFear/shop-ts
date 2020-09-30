import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import { CartItemModel } from "../../models/cartItem";

import * as actionCreators from "../../store/actionCreators";

import "./CartItem.scss";

interface CartItemProps {
  cartItem: CartItemModel;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeProductFromCart = useCallback(() => {
    dispatch(actionCreators.removeProductFromCart(cartItem.id));
  }, [cartItem.id, dispatch]);

  const incrementQuantity = useCallback(() => {
    dispatch(actionCreators.incrementQuantity(cartItem.id));
  }, [cartItem.id, dispatch]);

  const decrementQuantity = useCallback(() => {
    dispatch(actionCreators.decrementQuantity(cartItem.id));
  }, [cartItem.id, dispatch]);

  return (
    <div className="cart-item">
      <img src={cartItem.image} alt="cartItem" />
      <div>
        <h4>{cartItem.title}</h4>
        <h5>${cartItem.price}</h5>
        <span className="cart-item__remove" onClick={removeProductFromCart}>
          remove
        </span>
      </div>
      <div className="cart-item__controls">
        <span className="cart-item__add-one" onClick={incrementQuantity}>
          <FaChevronUp />
        </span>
        <p className="cart-item__amount">{cartItem.quantity}</p>
        <span className="cart-item__subtract-one" onClick={decrementQuantity}>
          <FaChevronDown />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
