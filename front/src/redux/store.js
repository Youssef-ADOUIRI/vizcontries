import { configureStore } from "@reduxjs/toolkit";
import hoverReducer from "./hoverReducer.js";

export default configureStore({ reducer: { hoverReducer:hoverReducer } });
