import React from "react";
import { Slider, withStyles } from "@material-ui/core";

/* HIGHER ORDER COMPONENT WAY */

const style = {
  root: {
    color: (props) => props.color,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50%)",
  },
  track: {
    height: 5,
    borderRadius: 4,
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
};

function MySliderRaw(props) {
  const { color, ...other } = props;
  return <Slider {...other} />;
}

const MySlider = withStyles(style)(MySliderRaw);

export default MySlider;
