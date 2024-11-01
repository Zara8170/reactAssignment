import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "../reduxComponents/postSlice";

const store = configureStore({
  reducer: {
    post: postSliceReducer,
  },
});

export default store;
