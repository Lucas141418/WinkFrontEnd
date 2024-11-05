import { Dimensions, StyleSheet } from "react-native";

const { width: widthScreen, height: heightScreen } = Dimensions.get("window");

const scale = widthScreen / 375;

const getFontSize = (size: number): number => {
  return size / scale;
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
    display: "flex",
    flex: 1,
    borderWidth: 15, //Quitar0
    borderColor: COLORS.primaryColor,
  },
  containerBalance: {
    borderColor: COLORS.primaryColor,
    borderWidth: 2, //Quitar
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
    aspectRatio: 4.1,
    borderColor: COLORS.primaryColor,
    borderWidth: 2, //Quitar
    height: undefined,
    width: widthScreen * 0.37,
  },
  sinpeButton: {
    backgroundColor: "black",
  },
  subText: {
    fontSize: FONT_SIZE.subText,
  },
});

export default AppStyles;
