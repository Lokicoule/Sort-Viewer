import { ItemStateColorEnum } from "../../constants/item";

export const setItemMapper = (item, index, state) => ({
  index,
  item: { ...item, state },
});

export const cursorMapper = (array, i) =>
  setItemMapper(array[i], i, ItemStateColorEnum.CURRENT);

export const cursorReleasedMapper = (array, i, sorted) =>
  setItemMapper(
    array[i],
    i,
    sorted ? ItemStateColorEnum.SORTED : ItemStateColorEnum.DEFAULT
  );
