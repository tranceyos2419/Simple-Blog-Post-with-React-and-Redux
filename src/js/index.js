import "../../views/index.html";
import "../css/style.css";
import PostsIndex from "./components/posts_index.jsx";
import PostsNew from "./components/posts_new.jsx";
import PostsShow from "./components/posts_show.jsx";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./reducers/reducers_index.jsx";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
