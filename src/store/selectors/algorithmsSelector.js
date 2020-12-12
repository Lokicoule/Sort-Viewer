import { createSelector } from "@reduxjs/toolkit";

export const getSelectedAlgorithms = createSelector(
  (state) => state.models.algorithms,
  (algorithms) =>
    Object.entries(algorithms)
      .map(([algorithm, data]) => data.checked && algorithm)
      .filter((algorithm) => algorithm)
);

export const getAlgorithms = createSelector(
  (state) => state.models.algorithms,
  (algorithms) =>
    Object.entries(algorithms).map(([algorithm, { checked, label }]) => ({
      algorithm,
      checked,
      label,
    }))
);

export const getAlgorithm = (name) => (state) => state.models.algorithms[name];

export const getAlgorithmItems = (name) => (state) =>
  state.models.algorithms[name].items;
