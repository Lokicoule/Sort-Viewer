import { getDefaultMiddleware } from "@reduxjs/toolkit";
import dispatcher from "./dispatcher";

const middleware = [...getDefaultMiddleware(), dispatcher];

export default middleware;
