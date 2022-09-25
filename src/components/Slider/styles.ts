import { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  fries: {
    // position: "absolute",
    // width: 172,
    // height: 172,
    // left: 72.07,
    // top: 159.71,s
    width: 230,
    height: 270,
  },
  star1: {
    position: "absolute",
    // left: "10%",
    left: "3.87%",
    right: "47.47%",
    top: "35%",
    bottom: "76.85%",
    width: 25,
    height: 27,
    zIndex: 1000,
    // transition: "all 1s ease-out",
    transition: "transform 1s",
  },
  star2: {
    position: "absolute",
    left: "50.73%",
    right: "41.33%",
    top: "30.82%",
    bottom: " 69.58%",
    zIndex: 1000,
    width: 11,
    height: 13,
    transition: "transform 1s",
  },
  star3: {
    position: "absolute",
    left: "45.67%",
    right: "89.33%",
    top: "35.14%",
    bottom: "65.76%",
    zIndex: 1000,
    width: 15,
    height: 17,
    transition: "transform 1s",
  },
};

export default styles;
