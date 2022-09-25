import { TInventory } from "../../store/slice/inventory/types";

const get = async (): Promise<TInventory[]> => {
  try {
    return await fetch("./inventories.json").then((res) => res.json());
  } catch (err) {
    console.error("err", err);
    return [];
  }
};

// const inventoryAPI = { get };

export { get };
