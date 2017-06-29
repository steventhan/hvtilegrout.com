import {
  pinkA200,
  grey100, grey300, grey400, grey500, grey600,
  white, darkBlack, fullBlack,
} from "material-ui/styles/colors";
import { fade } from "material-ui/utils/colorManipulator";
import spacing from "material-ui/styles/spacing";

export default {
  spacing: spacing,
  fontFamily: "Roboto, sans-serif",
  palette: {
    primary1Color: grey500,
    primary2Color: grey500,
    primary3Color: grey500,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey600,
    textColor: white,
    alternateTextColor: white,
    canvasColor: grey600,
    borderColor: grey600,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: grey600,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
