import React from "react";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

import {
    Badge,  
    Progress,
    Row,
} from "reactstrap";

let percentageValue = 0;
let barColor = "success";

class ProgressValue extends React.Component {

    componentWillReceiveProps() {
        percentageValue = Math.min(this.props.mainValue / this.props.valueThreshold, 1) * 100;
        if (this.props.valueState === 1) barColor = "warning";
        else if (this.props.valueState === 2) barColor = "danger";
        else barColor = "success";
    }

    render() {
        const { valueName, valueUnit, mainValue } = this.props;

      return (
        <Row style = {progressbarRow}>
            <div style = {valueStyle}>
                {valueName}
            </div>
            <div style = {progressbarContainer}>
                <Progress multi style = {progressbarStyle}>
                    <Progress animated bar striped color = {barColor} value = {percentageValue}/>
                </Progress>
            </div>
            <div style = {badgeContainer}>
                <Badge style = {badgeStyle}>
                    {mainValue} {" " + valueUnit}
                </Badge>
            </div>
        </Row>
      );
    }
  }

  // -- PROPS DEFINITION -- //

  ProgressValue.defaultProps = {
    valueName: "value",
    valueUnit: "u",
    valueThreshold: 10,
    mainValue: 5,
    valueState: 0,
  };

  ProgressValue.propTypes = {
    valueName: PropTypes.string,
    valueUnit: PropTypes.string,
    valueThreshold: PropTypes.number,
    mainValue: PropTypes.number,
    valueState: PropTypes.number,
  };


  // -- STYLING -- //

  const progressbarRow = {
      width: "100%",
      height: "100%",
      margin: 0
  };
  const valueStyle = {
      display: "inline-block"
  };
  const progressbarContainer = {
    padding: "4px 10px 4px 10px", 
    flexGrow: 70
  };
  const progressbarStyle = {
    height: "100%", 
    width: "100%",
  };
  const badgeContainer = {
    display: "inline-block", 
    textAlign: "right"
  };
  const badgeStyle = {
    backgroundColor: "#1e1e24", 
    color: "#00cc88", 
    fontSize: "1em"
  };


  // -- EXPORT -- //
  export default ProgressValue;