const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const commonColor = require("../../theme/variables/commonColor");

export default {
  containerImage: {
    flex: 1,
    width: null,
    height: null
  },
  logoShadowImage: {
    flex: 1,
    marginTop: deviceHeight < 600 ? -40 : -10,
    width: null,
    height: null,
    backgroundColor: "transparent"
  },
  bgView: {
    flex: 1,
    marginTop: deviceHeight / 2 - 150,
    backgroundColor: commonColor.brandPrimary,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: deviceHeight < 700 ?50:110*deviceHeight/667,
  },
  inputGrp: {
    flexDirection: "row",
    marginBottom: 10,
    borderBottomWidth:0,
    backgroundColor:'rgba(202,202,202,.1)',
    
  },
  input: {
    paddingLeft: 10,
    color: commonColor.textColor,
    fontFamily:'Poppins-Regular'
    
  },
  formErrorIcon: {
    color: commonColor.textColor,
    marginTop: 5,
    right: 10
  },
  formErrorText1: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: commonColor.brandDanger,
    textAlign: "right",
    top: -10
  },
  formErrorText2: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: "transparent",
    textAlign: "right",
    top: -10
  }
};
