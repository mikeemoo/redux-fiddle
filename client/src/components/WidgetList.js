import React from "react";
import * as WidgetComponents from "./widgets";

export default ({ widgets }) =>
    <div>{widgets.map(widget => {

        const Component = WidgetComponents[widget.type];
        const params = widget.params;

        return <Component {...params} />;
    })}</div>;
