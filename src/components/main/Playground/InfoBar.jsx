import React from "react";

import Form from "../../commons/Form";
import { DARK_THEME } from "../../../constants/components";
import { AppBar, styled } from "@material-ui/core";

const MyAppBar = styled(({ color, ...other }) => <AppBar {...other} />)({
  background: (props) => props.color,
  alignItems: "center",
});

class InfoBar extends Form {
  render() {
    const { position, model } = this.props;
    return (
      <MyAppBar color={DARK_THEME.color} position={position}>
        <span
          style={{ fontWeight: "bold", marginTop: "5px", fontSize: "20px" }}
        >
          {model.label}
        </span>
        <span style={{ marginTop: "5px", marginBottom: "5px" }}>
          Real execution time : {model.executionTime}
        </span>
      </MyAppBar>
    );
  }
}

InfoBar.defaultProps = {
  position: "fixed",
};

export default InfoBar;
