import { InventoryNames, InventoryKeys } from "../inventory/constants";

interface TItem {
  name: InventoryNames;
  quantity: number;
  individualPrice: string;
  id: number;
}

type TOrder = Record<InventoryKeys | "latestItem", TItem | InventoryKeys>;
