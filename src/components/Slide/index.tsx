import { TSlideProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { getImage } from "../../helpers/components/slide";
import { TInventory } from "../../store/slice/inventory/types";
import { addItem } from "../../store/slice/order";
import Plus from "../../asserts/plus.png";
import styles from "./styles";

const Slide = ({ inventoryKey }: TSlideProps) => {
  const inventory = useSelector((store: RootState) => store.inventory);
  const order = useSelector((store: RootState) => store.order);

  const currentInventoryDtls = inventory.find(
    (item) => item.key === inventoryKey
  ) as TInventory;

  const { name, key, individualPrice, stock } = currentInventoryDtls || {};

  const { quantity } = order[key] || {};

  const dispatch = useDispatch();

  const OnClickHandler = () => {
    dispatch(addItem(currentInventoryDtls));
  };

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 pt-2">
        <img
          src={getImage(key)}
          alt="Sooper Burger"
          style={styles[key]}
          id={`${key}_image`}
        />
      </div>
      <div className="col-span-1 pt-20">
        <div className={`${key}_data`} style={styles.data}>
          <div className="text-red-200 text-4xl">{name}</div>
          <div className="text-2xl text-red-200">{individualPrice}$</div>
          <button
            onClick={OnClickHandler}
            disabled={stock <= (quantity || 0)}
            className="pt-[50%]"
          >
            <img src={Plus} alt="Plus"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
