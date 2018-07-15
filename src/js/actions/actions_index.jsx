import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const CREATE_POSS = "create_posts";
export const GET_POST = "get_post";
export const DELETE_POST = "delete_post";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=tranceyos2419";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPosts(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(callback());
  return {
    type: CREATE_POSS,
    payload: request
  };
}

export function getPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: GET_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}
