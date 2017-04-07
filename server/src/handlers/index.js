import _ from "lodash";
import notes from "./notes";

const handlers = [
	notes
];

export default (services, socket, action) =>
    _.each(handlers, handler =>
        handler(services, socket, action));
