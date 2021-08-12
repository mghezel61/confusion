import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import { DishesReducer } from "./reducers/dishesReducer";
import { CommentsReducer } from "./reducers/commentsReducer";
import { LeadersReducer } from "./reducers/leadersReducer";
import { PromotionsReducer } from "./reducers/promotionsReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./forms";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: DishesReducer,
      comments: CommentsReducer,
      promotions: PromotionsReducer,
      leaders: LeadersReducer,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
  return store;
};
