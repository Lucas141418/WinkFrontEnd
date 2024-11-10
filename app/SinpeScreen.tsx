import { Stack } from "expo-router";
import ScreenCom from "../src/Components/Screen";
import SendSinpe from "../src/Components/SendSinpe";
import Header from "../src/Components/Header";

export default function SinpeScreen() {
  return (
    <ScreenCom>
      <Stack.Screen
        options={{
          headerBackVisible: false,
          header: () => <Header textHeader="Enviar dinero" />,
        }}
      />
      <SendSinpe />
    </ScreenCom>
  );
}
