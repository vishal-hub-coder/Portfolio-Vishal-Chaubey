import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "../features/slice/portfolioSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});
