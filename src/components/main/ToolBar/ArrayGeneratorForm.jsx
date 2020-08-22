import { blue } from "@material-ui/core/colors";
import React from "react";
import { INITIAL_ARRAY_SIZE } from "../../../constants/components";

import Form from "../../commons/Form";

class ArrayGeneratorForm extends Form {
  state = {
    data: { ...INITIAL_ARRAY_SIZE },
  };

  doSelectChange = () => {
    const { size } = this.state.data;
    this.props.updateReferential(size);
  };

  doSubmit = () => {
    const { size } = this.state.data;
    this.props.updateReferential(size);
  };

  render() {
    const { size } = this.state.data;
    const { locked } = this.props;
    const sliderProps = {
      label: "Array size",
      name: "size",
      value: size,
      disabled: locked,
      color: blue[400],
      min: 5,
      max: 100,
    };
    return (
      <form
        style={{
          display: "flex",
          flexGrow: 0.3,
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        onSubmit={this.handleSubmit}
      >
        {this.renderSlider(sliderProps)}
        {this.renderButton("Generate", locked)}
      </form>
    );
  }
}

export default ArrayGeneratorForm;
