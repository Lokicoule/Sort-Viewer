import { styled } from "@material-ui/core";
import { ItemStateColorEnum } from "../../../constants/item";

const Item = styled("div")({
  background: ({ state }) => (state && state) || ItemStateColorEnum.DEFAULT,
  width: ({ value }) => `${(value * 100) / 220}%`,
  height: ({ height }) => `${height}px`,
  backgroundColor: "#ffd23f",
  color: "#fff",
  marginTop: "1px",
  fontSize: ({ fontSize }) => `${fontSize}px`,
  paddingLeft: "15px",
  minHeight: "2px",
});

export default Item;
