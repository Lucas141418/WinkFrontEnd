import { Stack } from "expo-router";
import ScreenCom from "../src/Components/Screen";
import SendSinpe from "../src/Components/SendSinpe";
import Header from "../src/Components/Header";
import WinkAnimation from "../src/Components/Animation/WinkAnimation";

export default function SinpeScreen() {
  return (
    <ScreenCom>
      <Stack.Screen
        options={{
          header: () => <Header textHeader="Enviar dinero" />,
        }}
      />
      <WinkAnimation />
    </ScreenCom>
  );
}
