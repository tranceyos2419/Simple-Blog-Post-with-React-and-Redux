import "../../views/index.html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import '../index.html'

import App from "./components/app";
import reducers from "./reducers/index";

class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

class Goodbye extends React.Component {
  render() {
    return <div>Goodbye</div>;
  }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
