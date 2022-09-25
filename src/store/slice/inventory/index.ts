import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { TInventory } from "./types";

const InventorySlice = createSlice({
  name: "inventorySlice",
  initialState,
  reducers: {
    setInventory: (slice, action: PayloadAction<TInventory[]>) => {
      slice = action.payload;
      return slice;
    },
  },
});
const { setInventory } = InventorySlice.actions;

export { setInventory };

export default InventorySlice;
