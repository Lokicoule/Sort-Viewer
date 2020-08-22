import { Checkbox, withStyles } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import React from "react";

const MyCheckBox = withStyles({
  root: {
    color: pink[400],
    "&$checked": {
      color: pink[400],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default MyCheckBox;
