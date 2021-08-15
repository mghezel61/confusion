/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { actions } from "react-redux-form";
import {
  postComment,
  fetchComments,
  fetchDishes,
  fetchLeaders,
  fetchPromos,
} from "../redux/ActionCreators";
import About from "./About";
import Contact from "./Contact";
import DishDetail from "./DishDetail";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import { Slide } from "react-reveal";

const Main = (props) => {
  const { promotions, leaders } = props;

  useEffect(() => {
    props.fetchDishes();
    props.fetchComments();
    props.fetchLeaders();
    props.fetchPromos();
  }, []);
  const HomePage = () => (
    <Home
      dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
      dishesLoading={props.dishes.isLoading}
      dishesError={props.dishes.errMess}
      promotion={
        promotions.promotions.filter((promotion) => promotion.featured)[0]
      }
      promotionsLoading={promotions.isLoading}
      promotionsError={promotions.errMess}
      leader={leaders.leaders.filter((leader) => leader.featured)[0]}
      leadersLoading={leaders.isLoading}
      leadersError={leaders.errMess}
    />
  );

  const DishWithId = ({ match: { params } }) => {
    const dishId = +params.dishId;

    if (dishId !== undefined) {
      console.log("comments", props.comments.errMess);
      return (
        <DishDetail
          dish={props.dishes.dishes.filter((dish) => dish.id === dishId)[0]}
          isLoading={props.dishes.isLoading}
          errMess={props.dishes.errMess}
          comments={props.comments.comments.filter(
            (comment) => comment.dishId === dishId
          )}
          commentsErrMess={props.comments.errMess}
          postComment={props.postComment}
        />
      );
    }
  };

  return (
    <>
      <Header />
      <Slide key={props.location.key} left timeout={500}>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={props.leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={props.dishes} />}
            // component={() => <Menu dishes={props.dishes} />}
          />
          <Route exact path="/menu/:dishId" component={DishWithId} />
          <Route
            exact
            path="/contactus"
            component={() => (
              <Contact resetFeedbackForm={props.resetFeedbackForm} />
            )}
          />
          <Redirect to="/home" />
        </Switch>
      </Slide>
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
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),

  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchLeaders: () => {
    dispatch(fetchLeaders());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  resetFeedbackForm: () => dispatch(actions.reset("feedback")),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
