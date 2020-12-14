import SpeedHelper from "../../helpers/SpeedHelper";
import { sortActionDispatched } from "../actions/sorting";
import { setExecutionTime, setItem } from "../models/algorithms";
import { locks } from "../models/lock";
import { getSpeed } from "../selectors/speedSelector";

function dispatchAction(payload, dispatch) {
  const { algorithm, item, executionTime, lock } = payload;
  (item && dispatch(setItem(payload))) ||
    (executionTime && dispatch(setExecutionTime(payload))) ||
    dispatch(locks[algorithm](lock));
}

function dispatchActions(actions, dispatch) {
  if (!actions || !actions.length) return;
  dispatchAction(actions[0], dispatch);
  actions.shift();
  dispatchActions(actions, dispatch);
}

function handleDispatch(toDispatch, { dispatch, getState }, latencies) {
  if (!toDispatch.length) return;
  const { actions } = toDispatch[0];
  const speed = SpeedHelper.speedCalculator(getSpeed(getState()), latencies);

  dispatchActions(actions, dispatch);

  setTimeout(() => {
    toDispatch.shift();
    handleDispatch(toDispatch, { dispatch, getState }, latencies);
  }, speed);
}

const dispatcher = (store) => (next) => (action) => {
  if (action.type !== sortActionDispatched.type) return next(action);
  const { toDispatch, latencies } = action.payload;
  handleDispatch(toDispatch, store, latencies);
};

export default dispatcher;
