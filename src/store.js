import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice"; //userSlice.reducer; we are importing this
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
