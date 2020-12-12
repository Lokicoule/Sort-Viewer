import { connect } from "react-redux";

import Items from "../components/main/Playground/Items";

import { getAlgorithm } from "../store/selectors/algorithmsSelector";

const mapStateToProps = (state, ownProps) => ({
  model: getAlgorithm(ownProps.modelName)(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
