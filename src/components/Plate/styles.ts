import { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  orderItem: {
    // borderRadius: "25px",
    // width: "50px",
    // height: "50px",
    position: "absolute",
    top: 280,
    left: 10,
    zIndex: 1000,
    transition: "transform 1s",
  },
  latte: {
    width: "100px",
    height: "120px",
  },
};

export default styles;
