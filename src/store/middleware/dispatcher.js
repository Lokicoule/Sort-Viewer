import { speedCalculator } from "../../helpers/animationHelper";
import { sortActionDispatched } from "../actions/sorting";
import { getSpeed } from "../selectors/speedSelector";

function dispatchAction(action, dispatch) {
  if (action && action.type) dispatch(action);
}

function dispatchActions(actions, dispatch) {
  if (!actions.length) return;
  dispatchAction(actions[0], dispatch);
  actions.shift();
  dispatchActions(actions, dispatch);
}

function handleDispatch(toDispatch, { dispatch, getState }, latencies) {
  if (!toDispatch.length) return;
  const { actions } = toDispatch[0];
  const speed = speedCalculator(getSpeed(getState()), latencies);

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
