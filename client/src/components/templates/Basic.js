import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WidgetList from "../WidgetList";

export class Basic extends React.Component {
    render() {

        const { page } = this.props;
        const { content, sidebar } = page.sections;

        return <div>
            <div>
                <h2>Content:</h2>
                <WidgetList widgets={content} />
            </div>
            <div>
                <h2>Side bar:</h2>
                <WidgetList widgets={sidebar} />
            </div>
        </div>;
    }
}

export default connect(
    state => state,
    dispatch => ({

    })
)(Basic);
