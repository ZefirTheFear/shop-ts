export const SCROLL_TO_PRODUCTS = "SCROLL_TO_PRODUCTS";
export const SCROLL_TO_TOP = "SCROLL_TO_TOP";

export interface ScrollToProducts {
  type: typeof SCROLL_TO_PRODUCTS;
}

export interface ScrollToTop {
  type: typeof SCROLL_TO_TOP;
}

export type ScrollActionType = ScrollToProducts | ScrollToTop;
