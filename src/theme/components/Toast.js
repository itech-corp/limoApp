import variable from "./../variables/platform";
// It determines screen ratio for different screen sizes for proper display of contents
import { Dimensions,Platform } from "react-native";

const { height, width } = Dimensions.get("window");
const heightRatio = height / 667;
const widthRatio = width / 375;
export default (variables = variable) => {
  const platform = variables.platform;

  const toastTheme = {
    ".danger": {
      backgroundColor: variables.brandDanger
    },
    ".warning": {
      backgroundColor: variables.brandWarning
    },
    ".success": {
      backgroundColor: variables.brandSuccess
    },
    backgroundColor: "rgba(221,221,221, 0.3)",
    borderRadius: platform === "ios" ? 5 : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    minHeight: 50,
    marginTop:Platform.OS==='ios'?10*heightRatio:0,
    "NativeBase.Text": {
      color: "rgba(178, 45, 38, 0.9)",
      flex: 1
    },
    "NativeBase.Button": {
      backgroundColor: "transparent",
      height: 30,
      elevation: 0,
      "NativeBase.Text": {
        fontSize: 14
      }
    }
  };

  return toastTheme;
};
