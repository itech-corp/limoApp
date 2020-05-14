import variable from "./../variables/platform";
// It determines screen ratio for different screen sizes for proper display of contents
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const heightRatio = height / 667;
const widthRatio = width / 375;
export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const footerTheme = {
    "NativeBase.Left": {
      "NativeBase.Button": {
        ".transparent": {
          backgroundColor: "transparent",
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null
        },
        "NativeBase.Icon": {
          color: variables.topTabBarActiveTextColor
        },
        "NativeBase.IconNB": {
          color: variables.topTabBarActiveTextColor
        },
        alignSelf: null
      },
      flex: 1,
      alignSelf: "center",
      alignItems: "flex-start"
    },
    "NativeBase.Body": {
      flex: 1,
      alignItems: "center",
      alignSelf: "center",
      flexDirection: "row",
      "NativeBase.Button": {
        alignSelf: "center",
        ".transparent": {
          backgroundColor: "transparent",
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null
        },
        ".full": {
          height: variables.footerHeight,
          flex: 1
        },
        "NativeBase.Icon": {
          color: variables.topTabBarActiveTextColor
        },
        "NativeBase.IconNB": {
          color: variables.topTabBarActiveTextColor
        }
      }
    },
    "NativeBase.Right": {
      "NativeBase.Button": {
        ".transparent": {
          backgroundColor: "transparent",
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null
        },
        "NativeBase.Icon": {
          color: variables.topTabBarActiveTextColor
        },
        "NativeBase.IconNB": {
          color: variables.topTabBarActiveTextColor
        },
        alignSelf: null
      },
      flex: 1,
      alignSelf: "center",
      alignItems: "flex-end"
    },
    backgroundColor: variables.footerDefaultBg,
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth:
      platform === "ios" && platformStyle !== "material"
        ? variables.borderWidth
        : undefined,
    borderColor:
      platform === "ios" && platformStyle !== "material"
        ? "#cbcbcb"
        : undefined,
        paddingBottom:platform==='ios'?12*heightRatio:null,
        // height:platform === "ios"? variables.footerHeight+30:variables.footerHeight,

    elevation: 3,
    left: 0,
    right: 0
  };

  return footerTheme;
};
