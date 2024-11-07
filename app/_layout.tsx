/* eslint-disable linebreak-style */
import { Stack } from "expo-router";
import { View, Image } from "react-native";
import AppStyles from "../src/styles/AppStyles";
import logoIMg from "../src/assets/WINK.png";

export default function Layout(): JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerTitle: "",
          // headerLeft: () => <Header/>
          // headerRight: () => <></>,
          header: () => {
            return <Image source={logoIMg} style={AppStyles.logo} />;
          },
        }}
      />
    </View>
  );
}
