import { InventoryKeys } from "../../store/slice/inventory/enum";
import Burger from "../../asserts/burger.png";
import Fries from "../../asserts/fries.png";
import Latte from "../../asserts/latte.png";

const getImage = (type?: InventoryKeys) => {
  switch (type) {
    case InventoryKeys.LATTE:
      return Latte;
    case InventoryKeys.BURGER:
      return Burger;
    case InventoryKeys.FRIES:
      return Fries;
    default:
      return Burger;
  }
};

export { getImage };
