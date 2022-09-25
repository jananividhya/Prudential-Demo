import { InventoryKeys } from "../../store/slice/inventory/enum";
import sBurger from "../../asserts/sBurger1.png";
import sFries from "../../asserts/sFries.png";
import sLatte from "../../asserts/sLatte.png";

const getOrderImage = (type?: InventoryKeys | string) => {
  switch (type) {
    case InventoryKeys.LATTE:
      return sLatte;
    case InventoryKeys.BURGER:
      return sBurger;
    case InventoryKeys.FRIES:
      return sFries;
    default:
      return sBurger;
  }
};

export { getOrderImage };
