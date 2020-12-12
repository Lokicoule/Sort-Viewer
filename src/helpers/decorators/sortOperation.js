export default function decorator(wrappedFunc) {
  return function (algorithm) {
    return function () {
      const t0 = performance.now();
      const result = wrappedFunc.apply(this, arguments);
      const t1 = performance.now();
      result.unshift({
        actions: [
          {
            algorithm,
            executionTime: `${(t1 - t0).toFixed(4)} (ms)`,
          },
          { algorithm, lock: true },
        ],
      });
      result.push({
        actions: [{ algorithm, lock: false }],
      });
      return result;
    };
  };
}
