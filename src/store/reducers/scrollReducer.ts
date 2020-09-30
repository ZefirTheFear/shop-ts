import * as scrollActionTypes from "../actions/scrollActions/scrollActionTypes";

interface ScrollState {
  scrollToProducts: number;
}

const initialState: ScrollState = {
  scrollToProducts: 0
};

export default (state = initialState, action: scrollActionTypes.ScrollActionType) => {
  switch (action.type) {
    case scrollActionTypes.SCROLL_TO_PRODUCTS:
      return { ...state, scrollToProducts: state.scrollToProducts + 1 };

    default:
      return state;
  }
};
