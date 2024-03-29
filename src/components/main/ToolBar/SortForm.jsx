import React from "react";

import { INITIAL_SPEED } from "../../../constants/components";

import Form from "../../commons/Form";
class SortForm extends Form {
  state = {
    data: { ...INITIAL_SPEED },
  };

  doSelectChange = () => {
    const { speed } = this.state.data;
    const { setSpeed } = this.props;
    setSpeed(speed);
  };

  doCheckChange = ({ name, checked }) => {
    const { setAlgorithm } = this.props;
    setAlgorithm({ algorithm: name, checked });
  };

  doSubmit = () => {
    const { sortedItems, selectedAlgorithms, submit } = this.props;
    submit(sortedItems, selectedAlgorithms);
  };

  render() {
    const { speed } = this.state.data;
    const { locked, algorithms } = this.props;
    const sliderProps = {
      label: "Speed",
      name: "speed",
      value: speed,
      disabled: false,
      color: "#FE6B8B",
    };
    return (
      <form
        style={{
          display: "flex",
          flexGrow: 0.7,
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        onSubmit={this.handleSubmit}
      >
        {algorithms.map(({ algorithm, label, checked }) =>
          this.renderCheckBox(algorithm, label, checked)
        )}
        {this.renderSlider(sliderProps)}
        {this.renderButton("Sort", locked, "red")}
      </form>
    );
  }
}

export default SortForm;
