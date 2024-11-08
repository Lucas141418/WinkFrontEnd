/* eslint-disable linebreak-style */
import { Slot, Stack } from "expo-router";
import { View, Image, StyleSheet } from "react-native";
import AppStyles from "../src/styles/AppStyles";
import logoIMg from "../src/assets/WINK.png";

export default function Layout(): JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={AppStyles.borderTest}>
      <Stack screenOptions={{}} />
    </View>
  );
}
