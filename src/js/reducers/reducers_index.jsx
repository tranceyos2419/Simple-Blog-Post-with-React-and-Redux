import { combineReducers } from "redux";
import ReducerPosts from "./reducers_posts.jsx";
const rootReducer = combineReducers({
  posts: ReducerPosts
});
export default rootReducer;
