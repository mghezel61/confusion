import Menu from "./Menu";
import { useState } from "react";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const Main = () => {
  const [state, setState] = useState({
    dishes: DISHES,
    leaders: LEADERS,
    comments: COMMENTS,
    promotions: PROMOTIONS,
  });
  const HomePage = () => (
    <Home
      dish={state.dishes.filter((dish) => dish.featured)[0]}
      promotion={state.promotions.filter((promotion) => promotion.featured)[0]}
      leader={state.leaders.filter((leader) => leader.featured)[0]}
    />
  );
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={state.dishes} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default Main;
