import { Stack } from "expo-router";
import ScreenCom from "../src/Components/Screen";
import SendSinpe from "../src/Components/SendSinpe";
import AppStyles from "../src/styles/AppStyles";

export default function SinpeScreen() {
  return (
    <ScreenCom>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#4c51f7",
          },
          headerTintColor: "#fff",
          title: "Enviar Sinpe",
          headerTitleAlign: "center",
        }}
      />
      <SendSinpe />
    </ScreenCom>
  );
}
