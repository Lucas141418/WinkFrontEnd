import { Stack } from "expo-router";
import ScreenCom from "../src/Components/Screen";
import Header from "../src/Components/Header";
import SendSinpe from "../src/Components/Sinpe/SendSinpe";

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
