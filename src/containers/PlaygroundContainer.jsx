import { connect } from "react-redux";

import Playground from "../components/main/Playground";
import withWindowDimensions from "../components/wrappers/withWindowDimensions";
import { dispatchUpdatedItemsToStore } from "../operations/arrayOperation";

import { getSelectedAlgorithms } from "../store/selectors/algorithmsSelector";
import { isLocked } from "../store/selectors/lockSelector";
import { getNbItems } from "../store/selectors/referentialSelector";

const mapStateToProps = (state) => {
  return {
    nbItems: getNbItems(state),
    locked: isLocked(state),
    algorithms: getSelectedAlgorithms(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  updateReferential: (size) => {
    dispatch(dispatchUpdatedItemsToStore(size));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWindowDimensions(Playground));
