import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaRegWindowClose } from "react-icons/fa";

import CartItem from "../CartItem/CartItem";
import Modal from "../Modal/Modal";

import { CartState } from "../../store/reducer";
import * as actionCreators from "../../store/actionCreators";

import "./Cart.scss";

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: CartState) => state.cart);
  const isCartShown = useSelector((state: CartState) => state.isCartShown);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);

  useEffect(() => {
    if (name !== "" && phone !== "") {
      setIsDisabledSubmit(false);
    } else {
      setIsDisabledSubmit(true);
    }
  }, [name, phone]);

  const toggleBuy = useCallback(() => {
    setIsFormOpen((prevState) => !prevState);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    dispatch(actionCreators.hideCart());
    dispatch(actionCreators.clearCart());
    setIsFormOpen(false);
    setName("");
    setPhone("");
  }, [dispatch]);

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const onChangePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }, []);

  const hideCart = useCallback(() => {
    dispatch(actionCreators.hideCart());
  }, [dispatch]);

  const clearCart = useCallback(() => {
    dispatch(actionCreators.clearCart());
  }, [dispatch]);

  return (
    <div className={"cart-overlay" + (isCartShown ? " cart-overlay_transparentBcg" : "")}>
      <div className={"cart" + (isCartShown ? " showCart" : "")}>
        <span className="cart__close" onClick={hideCart}>
          <FaRegWindowClose />
        </span>
        <h2>your cart</h2>
        <div className="cart__content">
          {cart.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <div className="cart__footer">
          <h3>
            your total : $
            <span className="cart__total">
              {cart.reduce((sum, current) => sum + current.quantity * current.price, 0).toFixed(2)}
            </span>
          </h3>
          {cart.length > 0 ? (
            <>
              <button className="btn btn_cart" onClick={clearCart}>
                clear cart
              </button>
              <button className="btn btn_cart" onClick={toggleBuy}>
                {isFormOpen ? "cancel buy" : "buy"}
              </button>
            </>
          ) : null}
          {isFormOpen ? (
            <>
              <input
                type="text"
                className="cart__input"
                placeholder="name"
                value={name}
                onChange={onChangeName}
              />
              <input
                type="tel"
                className="cart__input"
                placeholder="phone"
                value={phone}
                onChange={onChangePhone}
              />
              {isDisabledSubmit ? null : (
                <button className="btn" onClick={openModal}>
                  submit
                </button>
              )}
            </>
          ) : null}
        </div>
      </div>
      {isModalOpen ? <Modal closeModal={closeModal} text="we will call u back" /> : null}
    </div>
  );
};

export default Cart;
