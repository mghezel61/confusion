import * as ActionTypes from "../ActionTypes";

const initialState = {
  isLoading: true,
  comments: [],
  errMess: "",
};

export const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      return { ...state, comments: state.comments.concat(comment) };
    default:
      return state;
  }
};
