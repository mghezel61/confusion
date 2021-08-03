import Menu from "./Menu";
import { useState } from "react";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <>
      <Header />
      <div className="container">
        <Menu dishes={DISHES} setSelectedDish={setSelectedDish} />
        <DishDetail dish={selectedDish} setSelectedDish={setSelectedDish} />
      </div>
      <Footer />
    </>
  );
};

export default Main;
