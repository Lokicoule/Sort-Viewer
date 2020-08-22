import { createSelector } from "@reduxjs/toolkit";

export const isLocked = createSelector(
  (state) => state.models.lock,
  (lock) =>
    lock.bubbleSort || lock.mergeSort || lock.selectionSort || lock.quickSort
);
