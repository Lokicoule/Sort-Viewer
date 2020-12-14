import {
  INFOBAR_PIXELS_HEIGHT,
  TOOLBAR_PIXELS_HEIGHT,
} from "../../constants/components";

export default class PlaygroundHelper {
  static useCasePercentageWidth(nbAlgorithms) {
    return (nbAlgorithms === 5 && 100 / 3) || (nbAlgorithms > 1 && 50) || 100;
  }

  static useCaseHeightAndFontSize(nbAlgorithms, nbItems, windowHeight) {
    const nbInfoBar = nbAlgorithms > 2 ? 2 : 1;
    const marginPerItem = nbAlgorithms > 2 ? 2 : 1;
    const totalMargin = nbItems * marginPerItem;
    const containerHeight =
      windowHeight -
      TOOLBAR_PIXELS_HEIGHT -
      INFOBAR_PIXELS_HEIGHT * nbInfoBar -
      totalMargin;
    const height = containerHeight / totalMargin;
    return { height, fontSize: height / 2 };
  }
}
