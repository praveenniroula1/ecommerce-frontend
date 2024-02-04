import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login/UserSlice";
import systemReducer from "./pages/system-slice/systemSlice";
import categoryReducer from "../src/pages/categories/categorySlice";

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemReducer,
    category: categoryReducer,
  },
});

export default store;
