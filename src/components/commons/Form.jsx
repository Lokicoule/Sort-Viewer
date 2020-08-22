import React, { Component } from "react";
import { Typography, FormControl, FormControlLabel } from "@material-ui/core";
import MySlider from "../customs/MySlider";
import MyButton from "../customs/MyButton";
import MyCheckBox from "../customs/MyCheckBox";

class Form extends Component {
  state = { data: {} };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  handleSliderChange = (e, newValue, name) => {
    const data = { ...this.state.data };
    data[name] = newValue;
    this.setState({ data }, () => this.doSelectChange());
  };

  handleCheckChange = (e) => {
    const { name, checked } = e.target;
    const checkList = { ...this.state.data.checkList };
    checkList[name] = checked;
    const data = { ...this.state.data, checkList };
    this.setState({ data }, () => this.doCheckChange({ name, checked }));
  };

  renderButton(label, disabled, color) {
    return (
      <MyButton
        disabled={disabled}
        type="submit"
        size="medium"
        padding="large"
        color={color}
      >
        {label}
      </MyButton>
    );
  }

  renderCheckBox(name, label, checked) {
    return (
      <FormControlLabel
        key={name}
        control={
          <MyCheckBox
            onChange={this.handleCheckChange}
            name={name}
            checked={checked}
          />
        }
        label={label}
      />
    );
  }

  renderSlider({ label, name, value, disabled, color, min, max }) {
    return (
      <FormControl
        style={{
          minWidth: "150px",
          maxWidth: "300px",
          marginLeft: 10,
          marginTop: 7,
        }}
      >
        <Typography>{label}</Typography>
        <MySlider
          color={color}
          valueLabelDisplay="auto"
          aria-label="slider"
          value={value}
          min={min}
          max={max}
          disabled={disabled}
          onChange={(e, val) => this.handleSliderChange(e, val, name)}
        />
      </FormControl>
    );
  }
}

export default Form;
