import cloneDeep from "clone-deep";

import { CartItem } from "../models/cartItem";
import * as actionTypes from "./actionTypes";

interface CartState {
  isCartShown: boolean;
  cart: CartItem[];
}

const initialState: CartState = {
  isCartShown: false,
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : []
};

export default (state = initialState, action: actionTypes.ActionType) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      const newCart = cloneDeep(state.cart);
      // const cartItem = cloneDeep(action.payload.product) as CartItem;
      // cartItem.quantity = 1;
      const cartItem: CartItem = { ...cloneDeep(action.payload.product), quantity: 1 };
      newCart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
        // isCartShown: true
      };

    case actionTypes.REMOVE_PRODUCT_FROM_CART: {
      let newCart = cloneDeep(state.cart);
      newCart = newCart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };
    }

    case actionTypes.INCREMENT_QUANTITY: {
      let newCart = cloneDeep(state.cart);
      newCart.find((item) => item.id === action.payload.id)!.quantity++;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };
    }

    case actionTypes.DECREMENT_QUANTITY: {
      let newCart = cloneDeep(state.cart);
      let quantity = newCart.find((item) => item.id === action.payload.id)!.quantity;
      if (quantity > 1) {
        newCart.find((item) => item.id === action.payload.id)!.quantity--;
      } else {
        newCart = newCart.filter((item) => item.id !== action.payload.id);
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };
    }

    case actionTypes.CLEAR_CART:
      localStorage.setItem("cart", JSON.stringify([]));
      return {
        ...state,
        cart: [],
        isCartShown: false
      };

    case actionTypes.SHOW_CART:
      return {
        ...state,
        isCartShown: true
      };

    case actionTypes.HIDE_CART:
      return {
        ...state,
        isCartShown: false
      };

    default:
      return state;
  }
};
