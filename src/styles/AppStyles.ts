import { Dimensions, PixelRatio, Platform, StyleSheet } from "react-native";

const { width: widthScreen, height: heightScreen } = Dimensions.get("window");

const HorizontalVariable = widthScreen / 375;
const verticalVariable = heightScreen / 812;

const scaleHorizontal = (size: number) => size * HorizontalVariable;
const scaleVertical = (size: number) => size * verticalVariable;

const getFontSize = (size: number): number => {
  const fontSize = size * HorizontalVariable;
  return (
    Math.round(PixelRatio.roundToNearestPixel(fontSize)) -
    (Platform.OS === "ios" ? 0 : 1)
  );
};

const COLORS = {
  gray: "#333333",
  white: "#fff",
  primaryColor: "#4c51f7",
};

const FONT_SIZE = {
  h1: getFontSize(28),
  subText: getFontSize(18.5),
  bigCurrency: getFontSize(35),
};

const AppStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primaryColor,
    borderWidth: 8,
    flex: 1,
  },
  containerBalance: {
    borderColor: COLORS.primaryColor,
    borderWidth: 2,
    gap: 12,
    marginTop: 15,
  },
  currentBalance: {
    color: COLORS.gray,
    fontSize: FONT_SIZE.bigCurrency,
    fontWeight: "bold",
  },
  h1: {
    color: COLORS.primaryColor,
    fontSize: FONT_SIZE.h1,
    fontWeight: "bold",
  },
  logo: {
    alignSelf: "center",
    borderColor: COLORS.primaryColor,
    borderWidth: 1,
    height: "5%",
    // height: undefined,
    marginTop: 15,
    // width: scaleHorizontal(180),
    resizeMode: "contain",
    width: "30%",
  },
  sinpeButton: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: COLORS.primaryColor,
    borderRadius: 100,
    height: scaleVertical(68),
    justifyContent: "center",
    width: scaleHorizontal(65),
  },
  subText: {
    fontSize: FONT_SIZE.subText,
  },
});

export default AppStyles;
