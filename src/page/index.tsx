import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Payment from "../components/Payment";
import { get } from "../helpers/api/inventory";
import { setInventory } from "../store/slice/inventory";

const MenuPage = (props: any) => {
  const dispatch = useDispatch();

  const fetchInventory = () => {
    get().then((res) => dispatch(setInventory(res)));
  };

  useEffect(() => {
    fetchInventory();
  });

  return (
    <>
      <Header />
      <Menu />
      <Contact />
      <Payment />
    </>
  );
};

export default MenuPage;
