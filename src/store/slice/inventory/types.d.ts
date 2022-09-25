import { InventoryKeys, InventoryNames } from "./enum";

interface TInventory {
  name: InventoryNames;
  key: InventoryKeys;
  stock: number;
  individualPrice: string;
}
