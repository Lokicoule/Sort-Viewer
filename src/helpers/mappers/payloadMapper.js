import { ItemStateColorEnum } from "../../constants/item";

export const setItemMapper = (algorithm, item, index, state) => ({
  algorithm,
  index,
  item: { ...item, state },
});

export const cursorMapper = (algorithm, array, i) =>
  setItemMapper(algorithm, array[i], i, ItemStateColorEnum.CURRENT);

export const cursorReleasedMapper = (algorithm, array, i, sorted) =>
  setItemMapper(
    algorithm,
    array[i],
    i,
    sorted ? ItemStateColorEnum.SORTED : ItemStateColorEnum.DEFAULT
  );
