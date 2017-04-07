import _ from "lodash";

export default socket => (...actions) => store => {
    socket.on(`action`, action =>
        store.dispatch(_.assign({}, action, { __remote: true })));

    return next => action => {
        if (_.includes(actions, action.type) && !action.__remote) {
            socket.emit(`action`, action);
        }
        next(action);
    };
};
