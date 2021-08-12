import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

// fetch dishes
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  return axios
    .get(`${baseUrl}dishes`)
    .then((res) => {
      const dishes = res.data;
      dispatch(addDishes(dishes));
    })
    .catch((error) => {
      dispatch(dishesFailed(error.message));
    });
};

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errMess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errMess,
});

// fetch comments
export const fetchComments = () => (dispatch) => {
  return axios
    .get(`${baseUrl}comments`)
    .then((res) => {
      const comments = res.data;
      dispatch(addComments(comments));
    })
    .catch((error) => {
      dispatch(commentsFailed(error.message));
    });
};

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const commentsFailed = (errMess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess,
});

// fetch promos
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));
  return (
    axios
      .get(`http://localhost:3001/promotions`)
      // .get(`${baseUrl}promotions`)
      .then((res) => {
        console.log("res", res);
        const promos = res.data;
        dispatch(addPromos(promos));
      })
      .catch((error) => {
        dispatch(promosFailed(error.message));
      })
  );
};

export const addPromos = (promotions) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promotions,
});

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errMess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errMess,
});

// fetch leader
export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading(true));
  return axios
    .get(`${baseUrl}leaders`)
    .then((res) => {
      const promos = res.data;
      dispatch(addLeaders(promos));
    })
    .catch((error) => {
      dispatch(leadersFailed(error.message));
    });
};

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errMess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errMess,
});
