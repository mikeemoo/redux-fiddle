import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducers from "./reducers";
import io from "socket.io-client";
import remote from "./middleware/remote";

const socket = io("http://localhost:3000");
const remoteActions = remote(socket)();

let store = createStore(reducers, applyMiddleware(remoteActions));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`app`)
)
