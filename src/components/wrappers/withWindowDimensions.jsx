import React, { Component } from "react";

const withWindowDimensions = (WrappedComponent) =>
  class extends Component {
    state = { dimensions: { width: 0, height: 0 } };

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
      const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      this.setState({ dimensions });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          windowDimensions={this.state.dimensions}
        />
      );
    }
  };

export default withWindowDimensions;
