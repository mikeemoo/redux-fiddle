import React from "react";

export default ({ text }) =>
    <div dangerouslySetInnerHTML={{__html: text}}></div>;
