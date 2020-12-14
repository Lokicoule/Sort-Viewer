import React, { Component } from "react";

import ItemsContainer from "../../../containers/ItemsContainer";
import PlaygroundHelper from "../../../helpers/components/PlaygroundHelper";

class Playground extends Component {
  componentDidMount() {
    const { nbItems, updateReferential } = this.props;
    updateReferential(nbItems);
  }

  render() {
    const { nbItems, algorithms, windowDimensions } = this.props;
    const widthPercentage = PlaygroundHelper.useCasePercentageWidth(
      algorithms.length
    );
    const { height, fontSize } = PlaygroundHelper.useCaseHeightAndFontSize(
      algorithms.length,
      nbItems,
      windowDimensions.height
    );
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {algorithms &&
          algorithms.map((algorithm, i) => (
            <ItemsContainer
              key={algorithm}
              modelName={algorithm}
              width={widthPercentage}
              height={height}
              fontSize={fontSize}
            ></ItemsContainer>
          ))}
      </div>
    );
  }
}

export default Playground;
