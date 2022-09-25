import { useEffect } from "react";
import { useSelector } from "react-redux";
import PlateImg from "../../asserts/plate.png";
import { getOrderImage } from "../../helpers/components/plate";
import { TItem, TOrder } from "../../store/slice/order/types";
import { RootState } from "../../store/types";
import styles from "./styles";

const Plate = () => {
  const order: TOrder = useSelector((store: RootState) => store.order);
  let orderKeys = Object.keys(order);

  useEffect(() => {
    if (order.latestItem) {
      let latestItemDetails = order[order.latestItem];
      const { id, quantity } = latestItemDetails || {};
      const validQuantity = quantity > 0 ? quantity - 1 : 0;
      let imageElement: any = document.getElementById(
        `${order.latestItem}_${validQuantity}`
      );
      let plate = document.getElementById("plate");
      var clientRect = plate?.getBoundingClientRect();
      var clientX = clientRect?.left;
      var clientY = clientRect?.top;

      if (imageElement) {
        imageElement.style.transform = `translateY(${
          (clientY || 0) - 320 + (validQuantity + 1) * (id + 1) * 6
        }px)`;
        imageElement.style.transform += `translateX(${
          80 + (validQuantity + 1) * (id + 1) * 44 - (clientX || 0)
        }px)`;
      }
    }
  }, [order]);

  return (
    <div style={{ display: "inline" }}>
      {orderKeys?.map((key, orderId) => {
        const orderDetails: TItem = order[key];
        const { quantity, id } = orderDetails;
        const array = Array.from({ length: quantity }, (v, i) => i);
        return array?.map((item, quantityId) => {
          return (
            <img
              id={`${key}_${quantityId}`}
              src={getOrderImage(key)}
              alt="Sooper sBurger"
              style={{ ...styles.orderItem, ...styles[key] }}
              data-id={id}
            />
          );
        });
      })}
      <img className="m-auto" id="plate" src={PlateImg} alt="Sooper Plate" />
    </div>
  );
};

export default Plate;
