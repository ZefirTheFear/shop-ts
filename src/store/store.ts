import { createStore, combineReducers } from "redux";

import cartReducer from "./reducers/cartReducer";
import scrollReducer from "./reducers/scrollReducer";

const rootReducer = combineReducers({
  cartState: cartReducer,
  scrollState: scrollReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

// const store = createStore(
//   rootReducer,
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     : null
// );

export default store;
