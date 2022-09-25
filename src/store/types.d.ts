import { TInventory } from "./slice/inventory/types";
import { TOrder } from "./slice/order/types";

type RootState = { inventory: TInventory[]; order: TOrder };
