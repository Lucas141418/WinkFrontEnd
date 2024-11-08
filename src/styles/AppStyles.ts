import { Dimensions, PixelRatio, Platform, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
  black: "#000000",
  gray: "#333333",
  gray_white: "#666",
  white: "#fff",
  primaryColor: "#4c51f7",
  red: "#d32f2f",
  yellow: "#cec00e",
  green: "#3be477",
  light_purple: "#D6D6FF",
  purple: "#4A4AFF",
};

const FONT_SIZE = {
  h1: getFontSize(28),
  h2: getFontSize(24),
  h3: getFontSize(18),
  text: getFontSize(16),
  subText: getFontSize(18.5),
  timeText: getFontSize(14),
  bigCurrency: getFontSize(35),
};

const AppStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.red,
    borderWidth: 8,
    flex: 1,
  },
  borderTest: {
    borderColor: COLORS.green,
    borderWidth: 2,
    flex: 1,
  },
  borderTest2: {
    borderColor: COLORS.yellow,
    borderWidth: 2,
  },
  containerBalance: {
    borderColor: COLORS.primaryColor,
    borderWidth: 2,
    gap: 12,
    paddingBottom: 10,
  },
  containerSinpe: {
    borderColor: COLORS.primaryColor,
    borderWidth: 2,
    gap: 12,
    paddingBottom: 10,
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
  h2: {
    fontSize: FONT_SIZE.h2,
    fontWeight: "bold",
  },
  h3: {
    color: COLORS.primaryColor,
    fontSize: FONT_SIZE.h3,
    fontWeight: "bold",
  },
  hScreen: {
    color: COLORS.white,
    fontSize: FONT_SIZE.h1,
    fontWeight: "bold",
  },
  logo: {
    alignSelf: "center",
    borderColor: COLORS.primaryColor,
    borderWidth: 1,
    height: "20%",
    marginTop: 15,
    resizeMode: "contain",
    width: "34%",
  },
  // eslint-disable-next-line react-native/no-color-literals
  sinpeButton: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: COLORS.white,
    borderRadius: 100,
    elevation: 8,
    height: scaleVertical(68),
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 5.84,
    width: scaleHorizontal(65),
  },
  text: {
    fontSize: FONT_SIZE.text,
  },
  subText: {
    fontSize: FONT_SIZE.subText,
  },
  transactionAmount: {
    color: COLORS.red,
    fontSize: FONT_SIZE.subText,
    fontWeight: "bold",
  },
  // eslint-disable-next-line react-native/no-color-literals
  transactionCard: {
    alignItems: "center",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    flexDirection: "row",
    height: scaleVertical(68),
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTime: {
    color: COLORS.gray_white,
    fontSize: FONT_SIZE.timeText,
  },
  transactionTitle: {
    color: COLORS.gray,
    fontSize: FONT_SIZE.text,
    fontWeight: "bold",
    marginBottom: 4,
  },
  viewButton: {
    alignItems: "center",
  },
  contactPreviewC: {
    //Posiblemente quitar o cambiar nombre
    alignItems: "center", // Centra el contenido horizontalmente
    backgroundColor: COLORS.light_purple, // Color de fondo
    borderRadius: 50, // Hace que el `View` sea un círculo
    height: 70,
    justifyContent: "center", // Centra el contenido verticalmente
    width: 70, // Puedes ajustar el tamaño según lo necesites
  },
  contactPreviewT: {
    color: COLORS.primaryColor, // Color del texto
    fontSize: 24, // Tamaño de la fuente
    fontWeight: "bold",
  },
  errorText: {
    color: COLORS.red,
    fontSize: FONT_SIZE.text,
    fontWeight: "bold",
  },
});

export default AppStyles;
