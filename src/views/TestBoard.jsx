import React from "react";

// reactstrap components
import {
  Button,
  Badge,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

// react plugin used to create charts
import { Line, Chart, Bar } from "react-chartjs-2";

// Class Imports

import BasicDiv from "components/Containers/BasicDiv.jsx";
import ButtonIcon from "components/ButtonIcon/ButtonIcon.jsx";


class TestBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorCycler: "#cc5200",
      invertedcolorCycler: "#ffffff",
    };
  }

  componentWillMount() {
    this.setState({invertedcolorCycler: this.invertHex(this.state.colorCycler)})
  }

  pickrandomColor(){
    this.setState({colorCycler: '#'+(Math.random()*0xFFFFFF<<0).toString(16)});
    this.setState({invertedcolorCycler: this.invertHex(this.state.colorCycler)})
  }

  invertHex(hex) {
    return (Number(`0x1${hex.substr(1)}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
  }

  render() {
    return (
        <div className="content" id = "main">
          <Col className = "col-seperator"></Col>
          <Col className = "col-seperator">
            <Row className = "middle-col-row"></Row>
            <Row className = "middle-col-row">
              <BasicDiv background_color = {this.state.colorCycler}/>
            </Row>
            <Row className = "middle-col-row">
              <Row className = "bottom-middle-row"/>
              <Row className = "bottom-middle-row">
                <ButtonIcon 
                  mainRef = {this} 
                  oncolorChange = {this.pickrandomColor} 
                  color_cycler = {this.state.colorCycler} 
                  invertedcolor_cycler = {this.state.invertedcolorCycler}
                />
              </Row>
              <Row className = "bottom-middle-row"/>
            </Row>
          </Col>
          <Col className = "col-seperator"></Col>
        </div>
    );
  }
}

export default TestBoard;