import { InventoryKeys } from "../../store/slice/inventory/enum";

const getPosition = (type?: InventoryKeys) => {
  switch (type) {
    case InventoryKeys.LATTE:
      return {
        star1: { X: 180, Y: 0 },
        star2: {
          X: 10,
          Y: -80,
        },
        star3: {
          X: -120,
          Y: 10,
        },
      };
    case InventoryKeys.BURGER:
      return {
        star1: { X: 40, Y: 6 },
        star2: {
          X: 20,
          Y: 20,
        },
        star3: {
          X: -160,
          Y: -130,
        },
      };
    case InventoryKeys.FRIES:
      return {
        star1: { X: 170, Y: -210 },
        star2: {
          X: -150,
          Y: -80,
        },
        star3: {
          X: 40,
          Y: -130,
        },
      };
    default:
      return {
        star1: { X: 40, Y: 6 },
        star2: {
          X: 20,
          Y: 20,
        },
        star3: {
          X: -160,
          Y: -130,
        },
      };
  }
};

export { getPosition };
