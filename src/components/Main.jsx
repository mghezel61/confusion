import Menu from "./Menu";
import { useState } from "react";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";

const Main = () => {
  const [dishes, setDishes] = useState(DISHES);
  const HomePage = () => <Home />;
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default Main;
