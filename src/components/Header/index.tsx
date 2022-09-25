import styles from "./styles";
import Burger from "../../asserts/burger.svg";
import ChopStick from "../../asserts/chopStick.svg";
import Flag from "../../asserts/flag.svg";
import Juice from "../../asserts/juice.svg";

const Header = () => {
  const icons = [Flag, Burger, Juice, ChopStick];
  return (
    <div
      style={styles.header}
      className="relative w-[100vw] h-[73px] grid grid-cols-4 gap-10 px-9 "
    >
      {icons?.map((icon: any, index: number) => (
        <div className="col-span-1  m-auto">
          <img key={index} src={icon} alt="My Happy SVG" />
        </div>
      ))}
    </div>
  );
};

export default Header;
