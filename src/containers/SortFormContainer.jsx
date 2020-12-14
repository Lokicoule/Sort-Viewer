import { connect } from "react-redux";

import SortForm from "../components/main/ToolBar/SortForm";

import { sortOperation } from "../operations";

import { getSortedItems } from "../store/selectors/referentialSelector";
import {
  getAlgorithms,
  getSelectedAlgorithms,
} from "../store/selectors/algorithmsSelector";

import { setAlgorithm } from "../store/models/algorithms";
import { setSpeed } from "../store/models/speed";
import { isLocked } from "../store/selectors/lockSelector";
import SpeedHelper from "../helpers/SpeedHelper";

const mapStateToProps = (state) => ({
  sortedItems: getSortedItems(state),
  locked: isLocked(state),
  selectedAlgorithms: getSelectedAlgorithms(state),
  algorithms: getAlgorithms(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSpeed: (speed) => dispatch(setSpeed(SpeedHelper.speedToPercentage(speed))),
  setAlgorithm: (algorithm) => dispatch(setAlgorithm(algorithm)),
  submit: (sortedArray, selectedAlgorithms) => {
    selectedAlgorithms.forEach((algorithm) => {
      dispatch(sortOperation(algorithm, sortedArray));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortForm);
