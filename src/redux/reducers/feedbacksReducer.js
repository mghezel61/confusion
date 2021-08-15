import * as ActionTypes from "../ActionTypes";

const initialState = {
  isLoading: true,
  feedbacks: [],
  errMess: "",
};

export const FeedbacksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      var feedback = action.payload;
      return { ...state, comments: state.feedbacks.concat(feedback) };
    default:
      return state;
  }
};
