import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import middleware from "./middleware";

export default function () {
  return configureStore({
    reducer,
    middleware,
  });
}
