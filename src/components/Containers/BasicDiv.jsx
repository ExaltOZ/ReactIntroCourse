import React from "react";
import "./Containers.scss"

class BasicDiv extends React.Component{

    render() {
        const { background_color, text } = this.props;

        return (
            <div className = "basic-div" style = {{backgroundColor: background_color}}>{text}</div>
        );
    }
}

// -- EXPORT -- //
export default BasicDiv;