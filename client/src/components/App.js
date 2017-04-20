import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as templates from "./templates";

export class App extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log("new props", nextProps);
    }

    render() {

        const { page } = this.props;
        const Template = templates[page.template];

        return <div>
            <Template />
        </div>;
    }
}

export default connect(
    state => state,
    dispatch => ({

    })
)(App);
