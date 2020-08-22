import { createSelector } from "@reduxjs/toolkit";

export const getSortedItems = createSelector(
  (state) => state.models.referential,
  (referential) => referential.sortedItems
);

export const getNbItems = createSelector(
  (state) => state.models.referential,
  (referential) => referential.nbItems
);
