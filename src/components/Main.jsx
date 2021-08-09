import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import DishDetail from "./DishDetail";
import About from "./About";
import { connect } from "react-redux";
import { addComment } from "../redux/ActionCreators";

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
});

const Main = (props) => {
  const { dishes, promotions, leaders, comments } = props;
  const HomePage = () => (
    <Home
      dish={dishes.filter((dish) => dish.featured)[0]}
      promotion={promotions.filter((promotion) => promotion.featured)[0]}
      leader={leaders.filter((leader) => leader.featured)[0]}
    />
  );

  const DishWithId = ({ match: { params } }) => {
    const dishId = +params.dishId;

    if (dishId !== undefined) {
      return (
        <DishDetail
          dish={dishes.filter((dish) => dish.id === dishId)[0]}
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
            component={() => <Menu dishes={dishes} />}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
