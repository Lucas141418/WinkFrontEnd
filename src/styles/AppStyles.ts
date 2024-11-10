/* eslint-disable react-native/sort-styles */
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
  mainContainer: {
    flex: 1,
  },
  contactDetails: {
    flex: 1,
  },
  contactInitials: {
    color: COLORS.primaryColor,
    fontSize: 16,
    fontWeight: "bold",
  },
  contactName: {
    fontSize: FONT_SIZE.subText,
  },

  contactPhone: {
    color: COLORS.gray_white,
    fontSize: FONT_SIZE.timeText,
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    marginBottom: 10,
  },
  containerBalance: {
    borderRadius: 8, // Opcional: para esquinas redondeadas
    marginHorizontal: 18,
    flex: 1,
    height: scaleVertical(380),
    justifyContent: "center",
    gap: 18,
  },
  containerSinpe: {
    gap: 12,
    paddingBottom: 10,
  },
  currentBalance: {
    color: COLORS.gray,
    fontSize: FONT_SIZE.bigCurrency,
    fontWeight: "bold",
  },
  currentBalanceContainer: {
    alignItems: "center",
  },
  errorText: {
    color: COLORS.red,
    fontSize: FONT_SIZE.text,
    fontWeight: "bold",
  },
  h1: {
    color: COLORS.primaryColor,
    fontSize: FONT_SIZE.h1,
    fontWeight: "bold",
    marginBottom: 4,
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

  logo: {
    alignSelf: "center",
    height: 100,
    resizeMode: "contain",
    width: 100,
  },
  TransactionSubText: {
    color: COLORS.gray_white,
    fontSize: FONT_SIZE.timeText,
    marginBottom: 5,
  },
  ContactsRow: {
    height: 1,
    marginVertical: 5,
  },
  text: {
    color: COLORS.gray,
    fontSize: FONT_SIZE.text,
  },
  subText: {
    fontSize: FONT_SIZE.subText,
  },
  TransactionSectionText: {
    fontSize: FONT_SIZE.text,
    marginBottom: 15,
  },
  TransactionContainer: {
    flex: 1,
    gap: 12,
    padding: 14,
  },
  transactionsList: {
    height: scaleVertical(356),
    marginHorizontal: 15,
  },
  TransactioncontactBackground: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: COLORS.light_purple,
    borderRadius: 150,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
  TransactionInitialPreview: {
    color: COLORS.purple,
    fontSize: FONT_SIZE.h2,
  },
  TransactionText: {
    color: COLORS.gray,
    fontSize: FONT_SIZE.text,
    textAlign: "center",
  },
  transactionAmountDetailed: {
    fontSize: FONT_SIZE.h2,
    fontWeight: "bold",
    textAlign: "center",
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
  transactionAmount: {
    color: COLORS.red,
    fontSize: FONT_SIZE.subText,
    fontWeight: "bold",
  },
  contactItem: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  contactInitialsContainer: {
    alignItems: "center",
    backgroundColor: COLORS.light_purple,
    borderRadius: 120,
    height: 45,
    justifyContent: "center",
    marginRight: 10,
    width: 45,
  },
  // eslint-disable-next-line react-native/no-color-literals
  transactionCard: {
    alignItems: "center",
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
    gap: 10,
  },
  searchInput: {
    borderColor: COLORS.gray_white,
    borderRadius: 25,
    borderWidth: 1,
    fontSize: FONT_SIZE.text,
    marginBottom: 16,
    padding: 10,
  },
  //Cambiar o mejora
  header: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    flexDirection: "row",
    gap: 20,
    padding: 16,
    paddingTop: 40,
  },
  headerText: {
    alignItems: "center",
    alignSelf: "center",
    color: COLORS.primaryColor,
    fontSize: FONT_SIZE.h2,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
  },
  Transactionbutton: {
    alignItems: "center",
    backgroundColor: COLORS.primaryColor,
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 20,
    padding: 15,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.text,
    fontWeight: "bold",
  },
});

export default AppStyles;
