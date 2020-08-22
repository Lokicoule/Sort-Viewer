import React, { Component } from "react";
import {
  INFOBAR_PIXELS_HEIGHT,
  TOOLBAR_PIXELS_HEIGHT,
} from "../../../constants/components";
import ItemsContainer from "../../../containers/ItemsContainer";

class Playground extends Component {
  componentDidMount() {
    const { nbItems, updateReferential } = this.props;
    updateReferential(nbItems);
  }

  render() {
    const { nbItems, algorithms, windowDimensions } = this.props;
    const widthPercentage = algorithms.length > 1 ? 50 : 100;
    const nbInfoBar = algorithms.length > 2 ? 2 : 1;
    const marginPerItem = algorithms.length > 2 ? 2 : 1;
    const totalMargin = nbItems * marginPerItem;
    const containerHeight =
      windowDimensions.height -
      TOOLBAR_PIXELS_HEIGHT -
      INFOBAR_PIXELS_HEIGHT * nbInfoBar -
      totalMargin;
    const height = containerHeight / totalMargin;
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {algorithms &&
          algorithms.map((algorithm) => (
            <ItemsContainer
              key={algorithm}
              modelName={algorithm}
              width={widthPercentage}
              height={height}
              fontSize={height / 2}
            ></ItemsContainer>
          ))}
      </div>
    );
  }
}

export default Playground;
