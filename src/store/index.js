import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clients";

export default configureStore({
  reducer: {
    clients: clientsReducer,
  },
});
