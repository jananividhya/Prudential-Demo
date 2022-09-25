import { useSelector } from "react-redux";
import { TItem } from "../../store/slice/order/types";
import { RootState } from "../../store/types";
import styles from "./styles";

const Payment = () => {
  const order = useSelector((store: RootState) => store.order);

  const orderKeys = Object.keys(order);

  const totalPrice = orderKeys?.reduce((total, key: any) => {
    const orderDetails: TItem = order[key];
    total =
      total +
      parseInt(orderDetails?.individualPrice || "0") *
        (orderDetails?.quantity || 0);
    return total;
  }, 0);

  return (
    <div className="absolute bottom-0 h-[73px] w-full">
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-2 text-5xl m-auto font-semibold">
          {totalPrice}$
        </div>
        <button
          className="col-span-1 bg-red h-full w-full m-auto text-3xl text-white font-semibold"
          style={styles.payButton}
        >
          Pay
          {/* <button className="m-auto">Pay</button> */}
        </button>
      </div>
    </div>
  );
};

export default Payment;
