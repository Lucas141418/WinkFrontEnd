/* eslint-disable linebreak-style */
import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          // headerTitle: ""
          // headerLeft: () => <Header/>
          // headerRight: () => <></>,
        }}
      />
    </View>
  );
}
