import cloneDeep from "clone-deep";

import { CartItemModel } from "../../models/cartItem";

import * as cartActionTypes from "../actions/cartActions/cartActionTypes";

interface CartState {
  isCartShown: boolean;
  cart: CartItemModel[];
}

const initialState: CartState = {
  isCartShown: false,
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : []
};

export default (state = initialState, action: cartActionTypes.CartActionType) => {
  switch (action.type) {
    case cartActionTypes.ADD_PRODUCT_TO_CART:
      const newCart = cloneDeep(state.cart);
      // const cartItem = cloneDeep(action.payload.product) as CartItem;
      // cartItem.quantity = 1;
      const cartItem: CartItemModel = { ...cloneDeep(action.payload.product), quantity: 1 };
      newCart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };

    case cartActionTypes.REMOVE_PRODUCT_FROM_CART: {
      let newCart = cloneDeep(state.cart);
      newCart = newCart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };
    }

    case cartActionTypes.INCREMENT_QUANTITY: {
      let newCart = cloneDeep(state.cart);
      newCart.find((item) => item.id === action.payload.id)!.quantity++;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };
    }

    case cartActionTypes.DECREMENT_QUANTITY: {
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

    case cartActionTypes.CLEAR_CART:
      localStorage.setItem("cart", JSON.stringify([]));
      return {
        ...state,
        cart: [],
        isCartShown: false
      };

    case cartActionTypes.SHOW_CART:
      return {
        ...state,
        isCartShown: true
      };

    case cartActionTypes.HIDE_CART:
      return {
        ...state,
        isCartShown: false
      };

    default:
      return state;
  }
};
