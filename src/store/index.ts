import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./slice/inventory";
import orderSlice from "./slice/order";

export const store = configureStore({
  reducer: {
    inventory: inventorySlice.reducer,
    order: orderSlice.reducer,
  },
});
