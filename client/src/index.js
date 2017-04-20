import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import * as reducers from "./reducers";
import io from "socket.io-client";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import _ from "lodash";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";
import remote from "./middleware/remote";

const history = createHistory();
/*
const socket = io("http://localhost:3000");
const remoteActions = remote(socket)(
    ADD_NOTE
);
*/
const store = createStore(
    combineReducers(
        _.assign({}, reducers, { router: routerReducer })
    ),
    {
        page: {
            url: "",
            template: "Basic",
            sections: {
                content: [
                    {
                        type: "Header",
                        params: {
                            text: "This is a page header"
                        }
                    },
                    {
                        type: "FreeText",
                        params: {
                            text: "<p>This is a big nasty chunk of random content which is dangerously set.</p>"
                        }
                    },
                    {
                        type: "Bullets",
                        params: {
                            bullets: [
                                "One",
                                "Two",
                                "Three"
                            ]
                        }
                    }
                ],
                sidebar: [
                    {
                        type: "RelatedTaggedContent",
                        params: {
                            tags: [
                                "One",
                                "Two",
                                "Three"
                            ]
                        }
                    }

                ]
            }
        }
    },
    applyMiddleware(
        //remoteActions,
        routerMiddleware(history)
    )
);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/*" component={App}/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById(`app`)
);
