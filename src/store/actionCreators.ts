import { ProductModel } from "./../models/product";
import * as actionTypes from "./actionTypes";

export const addProductToCart = (product: ProductModel): actionTypes.AddProductToCartAction => ({
  type: actionTypes.ADD_PRODUCT_TO_CART,
  payload: {
    product: product
  }
});

export const removeProductFromCart = (id: string): actionTypes.RemoveProductFromCartAction => ({
  type: actionTypes.REMOVE_PRODUCT_FROM_CART,
  payload: {
    id: id
  }
});

export const incrementQuantity = (id: string): actionTypes.IncrementQuantity => ({
  type: actionTypes.INCREMENT_QUANTITY,
  payload: {
    id: id
  }
});

export const decrementQuantity = (id: string): actionTypes.DecrementQuantity => ({
  type: actionTypes.DECREMENT_QUANTITY,
  payload: {
    id: id
  }
});

export const clearCart = (): actionTypes.ClearCart => ({
  type: actionTypes.CLEAR_CART
});

export const showCart = (): actionTypes.ShowCart => ({
  type: actionTypes.SHOW_CART
});

export const hideCart = (): actionTypes.HideCart => ({
  type: actionTypes.HIDE_CART
});
