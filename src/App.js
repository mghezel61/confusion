import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/Menu";

import { useState } from "react";
import { DISHES } from "./shared/dishes";

function App() {
  const [dishes, setDishes] = useState(DISHES);
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurant Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
