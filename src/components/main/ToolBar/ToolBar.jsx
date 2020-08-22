import React from "react";
import Toolbar from "@material-ui/core/Toolbar";

import Form from "../../commons/Form";
import ArrayGeneratorFormContainer from "../../../containers/ArrayGeneratorFormContainer";
import SortFormContainer from "../../../containers/SortFormContainer";
import {
  DARK_THEME,
  TOOLBAR_PIXELS_HEIGHT,
} from "../../../constants/components";
import { AppBar, styled } from "@material-ui/core";

const MyAppBar = styled(({ color, ...other }) => <AppBar {...other} />)({
  background: (props) => props.color,
});

class ToolBar extends Form {
  render() {
    return (
      <MyAppBar color={DARK_THEME.color} position="static">
        <Toolbar
          style={{
            minHeight: TOOLBAR_PIXELS_HEIGHT,
          }}
        >
          <ArrayGeneratorFormContainer />
          <SortFormContainer />
        </Toolbar>
      </MyAppBar>
    );
  }
}
export default ToolBar;
