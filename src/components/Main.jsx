/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { addComment, fetchDishes } from "../redux/ActionCreators";
import About from "./About";
import Contact from "./Contact";
import DishDetail from "./DishDetail";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";

const Main = (props) => {
  const { promotions, leaders, comments } = props;

  useEffect(() => {
    props.fetchDishes();
  }, []);
  const HomePage = () => (
    <Home
      dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
      dishesLoading={props.dishes.isLoading}
      dishesError={props.dishes.errMess}
      promotion={promotions.filter((promotion) => promotion.featured)[0]}
      leader={leaders.filter((leader) => leader.featured)[0]}
    />
  );

  const DishWithId = ({ match: { params } }) => {
    const dishId = +params.dishId;

    if (dishId !== undefined) {
      return (
        <DishDetail
          dish={props.dishes.dishes.filter((dish) => dish.id === dishId)[0]}
          isLoading={props.dishes.isLoading}
          ErrorMess={props.dishes.errMess}
          comments={comments.filter((comment) => comment.dishId === dishId)}
          addComment={props.addComment}
        />
      );
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={props.dishes} />}
            // component={() => <Menu dishes={props.dishes} />}
          />
          <Route exact path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),

  fetchDishes: () => {
    dispatch(fetchDishes());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
