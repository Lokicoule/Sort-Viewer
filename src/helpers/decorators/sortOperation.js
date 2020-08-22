export default function decorator(wrappedFunc) {
  return function (executionAction) {
    return function (lockAction) {
      return function () {
        const t0 = performance.now();
        const result = wrappedFunc.apply(this, arguments);
        const t1 = performance.now();
        result.unshift({
          actions: [
            executionAction({
              executionTime: `${(t1 - t0).toFixed(4)} (ms)`,
            }),
            lockAction(true),
          ],
        });
        result.push({
          actions: [lockAction(false)],
        });
        return result;
      };
    };
  };
}
