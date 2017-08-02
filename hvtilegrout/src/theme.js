import {
  blueGrey800, fullWhite, darkBlack, fullBlack,
} from "material-ui/styles/colors";
import { fade } from "material-ui/utils/colorManipulator";
import spacing from "material-ui/styles/spacing";

export default {
  spacing: spacing,
  fontFamily: "Roboto Condensed, sans-serif",
  palette: {
    primary1Color: blueGrey800,
    primary2Color: darkBlack,
    primary3Color: blueGrey800,
    accent1Color: darkBlack,
    accent2Color: blueGrey800,
    accent3Color: blueGrey800,
    textColor: fullWhite,
    alternateTextColor: fullWhite,
    canvasColor: blueGrey800,
    borderColor: blueGrey800,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blueGrey800,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
