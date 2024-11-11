/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";

const AnimationStyle = StyleSheet.create({
  Box: {
    alignItems: "center",
    backgroundColor: "#4c51f7",
    borderRadius: 20,
    height: 120,
    justifyContent: "center",
    margin: 20,
    position: "relative",
    width: 120,
  },
  FaceContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  LetterContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
  },
  WinkText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    flex: 1,
    height: 400,
    justifyContent: "center",
  },
  letterContainerInside: {},
});

export default AnimationStyle;
