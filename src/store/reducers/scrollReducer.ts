import * as scrollActionTypes from "../actions/scrollActions/scrollActionTypes";

interface ScrollState {
  scrollToProducts: number;
  scrollToTop: number;
}

const initialState: ScrollState = {
  scrollToProducts: 0,
  scrollToTop: 0
};

export default (state = initialState, action: scrollActionTypes.ScrollActionType) => {
  switch (action.type) {
    case scrollActionTypes.SCROLL_TO_PRODUCTS:
      return { ...state, scrollToProducts: state.scrollToProducts + 1 };

    case scrollActionTypes.SCROLL_TO_TOP:
      return { ...state, scrollToTop: state.scrollToTop + 1 };

    default:
      return state;
  }
};
