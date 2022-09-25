import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TInventory } from "../inventory/types";
import { initialState } from "./constants";

const OrderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    addItem: (
      state,
      { payload: { key, name, individualPrice } }: PayloadAction<TInventory>
    ) => {
      state[key]
        ? (state[key] || { quantity: 1 }).quantity++
        : (state[key] = {
            name,
            quantity: 1,
            individualPrice,
            id: Object.keys(state)?.length,
          });
      state.latestItem = key;
      return state;
    },
  },
});

const { addItem } = OrderSlice.actions;
export { addItem };
export default OrderSlice;
