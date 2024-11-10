/* eslint-disable linebreak-style */
import { Stack } from "expo-router";
import { View } from "react-native";
import AppStyles from "../src/styles/AppStyles";
import { Image } from "react-native";
import img from "../src/assets/WINK.png";

export default function Layout(): JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={AppStyles.mainContainer}>
      <Stack
        screenOptions={{
          header: () => <Image source={img} style={AppStyles.logo} />,
        }}
      />
    </View>
  );
}
