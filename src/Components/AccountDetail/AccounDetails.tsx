import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Balance from "./Balance";
import { UsersIds } from "../../constants";
import AppStyles from "../../styles/AppStyles";
import { TransactionInterface } from "../../types";
import { TransactionsCardsAnimated } from "../TransactionsCard";
import { transactionsJSON } from "../../Mocks/transactions.json";
import useFetchTransactionsHistory from "../../Hooks/useFetchTransactionsHistory";

export default function AccountDetails() {
  const { userId1: userId } = UsersIds; // Simulate handling of different users


  // const [transactionsHistory, setTransactionHistory] = useState<
  //   TransactionInterface[]
  // >([]);

  // useEffect(() => {
  //   // Simulate fetching transactions and user info on mount
  //   setTransactionHistory(transactionsJSON);
  // }, []);
  const { transactionsHistory, getTransactionHistory, lastEvaluatedKey } =
    useFetchTransactionsHistory();

  useEffect(() => {
    getTransactionHistory({ userId, lastEvaluatedKey: null });
  }, [getTransactionHistory]);

  function handleEndReached() {
    if (lastEvaluatedKey) {
      getTransactionHistory({ userId, lastEvaluatedKey });
    }
  }

  // function handleEndReached() {}

  // if (!transactionsHistory) return <Text>No hay datos de usuario</Text>;

  return (
    <View>
      <Balance userId={userId} />

      <FlatList
        data={transactionsHistory}
        keyExtractor={(item) => item.transactionId}
        renderItem={({ item, index }) => (
          <TransactionsCardsAnimated transaction={item} index={index} />
        )}
        style={AppStyles.transactionsList}
        onEndReached={() => handleEndReached()}
      />
    </View>
  );
}
