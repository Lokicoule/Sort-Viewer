import { connect } from "react-redux";

import ArrayGeneratorForm from "../components/main/ToolBar/ArrayGeneratorForm";
import { dispatchUpdatedItemsToStore } from "../operations/arrayOperation";
import { isLocked } from "../store/selectors/lockSelector";

const mapStateToProps = (state) => ({ locked: isLocked(state) });

/**
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  updateReferential: (size) => {
    dispatch(dispatchUpdatedItemsToStore(size));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArrayGeneratorForm);
