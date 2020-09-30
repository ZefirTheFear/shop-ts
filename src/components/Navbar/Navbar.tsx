import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaCartPlus } from "react-icons/fa";

import { CartState } from "../../store/reducer";
import * as actionCreators from "../../store/actionCreators";

import logo from "../../images/logo.svg";

import "./Navbar.scss";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: CartState) => state.cart);

  const showCart = useCallback(() => {
    dispatch(actionCreators.showCart());
  }, [dispatch]);

  return (
    <nav className="navbar">
      <div className="navbar__center">
        <img src={logo} alt="logo" className="navbar__logo" />
        <div className="navbar__cart-btn" onClick={showCart}>
          <span className="navbar__icon">
            <FaCartPlus />
          </span>
          <div className="navbar__cart-items">
            {cart.reduce((sum, current) => sum + current.quantity, 0)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
