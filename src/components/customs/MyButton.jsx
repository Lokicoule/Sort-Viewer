import React from "react";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

/** StyledComponent WAY */

const style = {
  background: (props) =>
    props.color === "red"
      ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
      : "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: (props) =>
    props.color === "red"
      ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
      : "0 3px 5px 2px rgba(33, 203, 243, .30)",
  color: "white",
  height: 48,
  padding: (props) => (props.padding === "large" ? "0 30px" : ""),
  margin: 8,
};

const MyButton = styled(({ color, ...other }) => <Button {...other} />)(style);

export default MyButton;
