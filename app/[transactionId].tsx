import { Stack, useLocalSearchParams } from "expo-router";
import ScreenCom from "../src/Components/Screen";
import { UsersIds } from "../src/constants";
import Header from "../src/Components/Header";
import TransactionDetail from "../src/Components/Transaction/TransactionDetail";

export default function TransactionDetails() {
  const { transactionId } = useLocalSearchParams();
  const user1 = UsersIds.userId1;

  return (
    <ScreenCom>
      <Stack.Screen
        options={{
          header: () => <Header textHeader="Detalles de movimiento" />,
        }}
      />

      <TransactionDetail
        transactionId={transactionId as string}
        userId={user1}
      />
    </ScreenCom>
  );
}
