import React from "react";
import "./ButtonIcon.scss"

// to adjust icon parameters
import {IconContext} from "react-icons";

// ICON IMPORTS
import {GiPerspectiveDiceSixFacesRandom} from "react-icons/gi"; // alarm icon

// reactstrap components
import {
    Button,
    Col,
  } from "reactstrap";

// Class Import
import BadgeDiv from "components/Containers/BadgeDiv.jsx"

class ButtonIcon extends React.Component{

    render() {
        const { mainRef, oncolorChange, color_cycler, invertedcolor_cycler } = this.props;

        return (
            <Button onClick = {oncolorChange.bind(mainRef)} className = "color-cycler-button" style = {{backgroundColor: color_cycler}}>
                <Col>
                    <IconContext.Provider value = {{color: invertedcolor_cycler}}>
                        <GiPerspectiveDiceSixFacesRandom className = "random-icon"/>
                    </IconContext.Provider>
                </Col>
                <Col>
                    <BadgeDiv
                        background_color = {invertedcolor_cycler}  
                        text = "Click Me!"
                    />
                </Col>
            </Button>
        );
    }
}

// -- EXPORT -- //
export default ButtonIcon;