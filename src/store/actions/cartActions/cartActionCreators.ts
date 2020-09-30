import { ProductModel } from "../../../models/product";
import * as cartActionTypes from "./cartActionTypes";

export const addProductToCart = (
  product: ProductModel
): cartActionTypes.AddProductToCartAction => ({
  type: cartActionTypes.ADD_PRODUCT_TO_CART,
  payload: {
    product: product
  }
});

export const removeProductFromCart = (id: string): cartActionTypes.RemoveProductFromCartAction => ({
  type: cartActionTypes.REMOVE_PRODUCT_FROM_CART,
  payload: {
    id: id
  }
});

export const incrementQuantity = (id: string): cartActionTypes.IncrementQuantity => ({
  type: cartActionTypes.INCREMENT_QUANTITY,
  payload: {
    id: id
  }
});

export const decrementQuantity = (id: string): cartActionTypes.DecrementQuantity => ({
  type: cartActionTypes.DECREMENT_QUANTITY,
  payload: {
    id: id
  }
});

export const clearCart = (): cartActionTypes.ClearCart => ({
  type: cartActionTypes.CLEAR_CART
});

export const showCart = (): cartActionTypes.ShowCart => ({
  type: cartActionTypes.SHOW_CART
});

export const hideCart = (): cartActionTypes.HideCart => ({
  type: cartActionTypes.HIDE_CART
});
