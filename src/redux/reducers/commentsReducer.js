import * as ActionTypes from "../ActionTypes";

const initialState = {
  isLoading: true,
  comments: [],
  errMess: "",
};

export const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      return { ...state, comments: state.comments.concat(comment) };
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
        errMess: null,
      };
    case ActionTypes.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        comments: [],
        errMess: action.payload,
      };
    default:
      return state;
  }
};
