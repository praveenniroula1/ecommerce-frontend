import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login/UserSlice";
const store = configureStore({
  reducer: {
    admin: userReducer,
  },
});

export default store;
