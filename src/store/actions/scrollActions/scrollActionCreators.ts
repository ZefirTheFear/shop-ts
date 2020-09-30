import * as scrollActionTypes from "./scrollActionTypes";

export const scrollToProducts = (): scrollActionTypes.ScrollToProducts => ({
  type: scrollActionTypes.SCROLL_TO_PRODUCTS
});

export const scrollToTop = (): scrollActionTypes.ScrollToTop => ({
  type: scrollActionTypes.SCROLL_TO_TOP
});
