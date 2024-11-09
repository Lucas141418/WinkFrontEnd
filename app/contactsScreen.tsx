import { Stack } from "expo-router";
import ScreenCom from "../src/Components/Screen";
import Header from "../src/Components/Header";
import { ContactList } from "../src/Components/Conctacts";

export default function contactsScreen() {
  return (
    <ScreenCom>
      <Stack.Screen
        options={{
          header: () => <Header textHeader="Seleccioná un contacto" />,
        }}
      />

      <ContactList />
    </ScreenCom>
  );
}
