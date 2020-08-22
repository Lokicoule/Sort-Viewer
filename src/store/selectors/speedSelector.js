import { createSelector } from "@reduxjs/toolkit";

export const getSpeed = createSelector(
  (state) => state.models.speed,
  (speed) => speed.value
);
