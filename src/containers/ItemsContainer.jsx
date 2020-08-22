import { connect } from "react-redux";

import Items from "../components/main/Playground/Items";

import { getModel } from "../store/selectors/modelSelector";

const mapStateToProps = (state, ownProps) => ({
  model: getModel(ownProps.modelName)(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
