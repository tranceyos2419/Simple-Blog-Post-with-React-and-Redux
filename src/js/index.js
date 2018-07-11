import "../../views/index.html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import '../index.html'

import promise from "redux-promise";
import reducers from "./reducers/reducers_index.jsx";
import PostsIndex from "./components/posts_index.jsx";
import PostsNew from "./components/posts_new.jsx";
// class PostsNew extends React.Component {
//   render() {
//     return <div> Hey </div>;
//   }
// }
class Hello extends React.Component {
  render() {
    return <div>Hello!</div>;
  }
}
class Goodbye extends React.Component {
  render() {
    return <div>byebye!</div>;
  }
}
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
