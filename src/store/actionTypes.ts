import { ProductModel } from "./../models/product";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const SHOW_CART = "SHOW_CART";
export const HIDE_CART = "HIDE_CART";

export interface AddProductToCartAction {
  type: typeof ADD_PRODUCT_TO_CART;
  payload: { product: ProductModel };
}

export interface RemoveProductFromCartAction {
  type: typeof REMOVE_PRODUCT_FROM_CART;
  payload: { id: string };
}

export interface IncrementQuantity {
  type: typeof INCREMENT_QUANTITY;
  payload: { id: string };
}

export interface DecrementQuantity {
  type: typeof DECREMENT_QUANTITY;
  payload: { id: string };
}

export interface ClearCart {
  type: typeof CLEAR_CART;
}

export interface ShowCart {
  type: typeof SHOW_CART;
}

export interface HideCart {
  type: typeof HIDE_CART;
}

export type ActionType =
  | AddProductToCartAction
  | RemoveProductFromCartAction
  | IncrementQuantity
  | DecrementQuantity
  | ClearCart
  | ShowCart
  | HideCart;
