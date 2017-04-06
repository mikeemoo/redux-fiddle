import _ from "lodash";

const handlers = [];

export default (services, socket, action) =>
    _.each(handlers, handler =>
        handler(services, socket, action));
