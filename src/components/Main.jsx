import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu";
import { useState } from "react";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";

const Main = () => {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurant Confusion</NavbarBrand>
        </div>
      </Navbar>
      <div className="container">
        <Menu dishes={DISHES} setSelectedDish={setSelectedDish} />
        <DishDetail dish={selectedDish} setSelectedDish={setSelectedDish} />
      </div>
    </div>
  );
};

export default Main;
