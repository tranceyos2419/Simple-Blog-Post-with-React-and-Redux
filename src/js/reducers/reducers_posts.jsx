import _ from "lodash";
import {
  FETCH_POSTS,
  GET_POST,
  DELETE_POST
} from "../actions/actions_index.jsx";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case GET_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}

// const post = action.payload.data;
// const newState = { ...state };
// newState[post.id] = post;
// return newState;
