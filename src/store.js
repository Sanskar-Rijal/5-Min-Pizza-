import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice"; //userSlice.reducer; we are importing this

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
