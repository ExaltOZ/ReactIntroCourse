import React from "react";
import "./Containers.scss"

class BadgeDiv extends React.Component{

    render() {
        const { background_color, text } = this.props;

        return (
            <div className = "badge-div" style = {{backgroundColor: background_color}}>{text}</div>
        );
    }
}

// -- EXPORT -- //
export default BadgeDiv;