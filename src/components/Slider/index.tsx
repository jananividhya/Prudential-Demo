import Slide from "../Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./styles";

import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import star1 from "../../asserts/star11.png";
import star2 from "../../asserts/star2.png";
import star3 from "../../asserts/star3.png";
import { getPosition } from "../../helpers/components/slider";
import { Navigation } from "swiper";
const Slider = () => {
  const inventory = useSelector((state: RootState) => state.inventory);

  const setDataStyle = (data: any) => {
    let currentSlide = inventory[data.realIndex];
    let dataElements = document.getElementsByClassName(
      `${currentSlide?.key}_data`
    );

    if (dataElements) {
      for (let i = 0; i < dataElements?.length; i++) {
        let dataElement: any = dataElements[i];
        if (dataElement) {
          dataElement.style.opacity = "0";
        }
      }
    }
  };

  const addATransition = (data: any) => {
    let currentSlide = inventory[data.realIndex];
    let {
      star1: star1End,
      star2: star2End,
      star3: star3End,
    } = getPosition(currentSlide.key);

    let star1Element = document.getElementById("star1");
    let star2Element = document.getElementById("star2");
    let star3Element = document.getElementById("star3");
    let dataElements = document.getElementsByClassName(
      `${currentSlide?.key}_data`
    );

    if (dataElements) {
      for (let i = 0; i < dataElements?.length; i++) {
        let dataElement: any = dataElements[i];
        if (dataElement) {
          dataElement.style.opacity = "1";
          dataElement.style.transition = `opacity 2s`;
        }
      }
    }

    if (star1Element) {
      star1Element.style.transform = `translateY(${star1End?.Y}px)`;
      star1Element.style.transform += `translateX(${star1End?.X}px)`;
    }
    if (star2Element) {
      star2Element.style.transform = `translateY(${star2End?.Y}px)`;
      star2Element.style.transform += `translateX(${star2End?.X}px)`;
    }
    if (star3Element) {
      star3Element.style.transform = `translateY(${star3End?.Y}px)`;
      star3Element.style.transform += `translateX(${star3End?.X}px)`;
    }
  };

  if (inventory?.length > 0)
    return (
      <>
        <div>
          <img src={star1} alt="Star One" style={styles.star1} id={`star1`} />
          <img src={star2} alt="Star Two" style={styles.star2} id={`star2`} />
          <img src={star3} alt="Star Three" style={styles.star3} id={`star3`} />
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            initialSlide={0}
            onUpdate={addATransition}
            onSlideChange={addATransition}
            onProgress={setDataStyle}
            onSlideResetTransitionEnd={addATransition}
            loop={true}
            id="mySwiper"
          >
            {inventory?.map((item) => (
              <SwiperSlide id={item?.key}>
                <Slide key={item?.key} inventoryKey={item.key} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  return <></>;
};

export default Slider;
