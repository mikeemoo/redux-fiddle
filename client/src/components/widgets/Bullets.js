import React from "react";

export default ({ bullets }) =>
    <ul>{bullets.map(bullet =>
        <li>{bullet}</li>
    )}</ul>;
