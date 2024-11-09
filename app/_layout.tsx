/* eslint-disable linebreak-style */
import { Stack } from "expo-router";
import { View } from "react-native";
import AppStyles from "../src/styles/AppStyles";

export default function Layout(): JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={AppStyles.borderTest}>
      <Stack screenOptions={{}} />
    </View>
  );
}
