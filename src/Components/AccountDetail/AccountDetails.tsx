import React, { useEffect, useMemo } from "react";
import { View, FlatList } from "react-native";
import Balance from "./Balance";
import AppStyles from "../../styles/AppStyles";
import useFetchTransactionsHistory from "../../Hooks/useFetchTransactionsHistory";
import { TransactionsCardsAnimated } from "../Transaction/TransactionsCard";
import { UsersIds } from "../../constants";

export default function AccountDetails() {
  /**
   * @type {string} userId
   * @description Simulate handling of different users by changing the userId value
   */
  const { userId1: userId }: { userId1: string } = UsersIds;

  const { transactionsHistory, getTransactionHistory, lastEvaluatedKey } =
    useFetchTransactionsHistory();

  useEffect(() => {
    getTransactionHistory({ userId, lastEvaluatedKey: null });
  }, []);

  function handleEndReached() {
    if (lastEvaluatedKey) {
      getTransactionHistory({ userId, lastEvaluatedKey });
    }
  }
  const sortedTransactions = useMemo(() => {
    return [...transactionsHistory].sort(
      (a, b) =>
        new Date(b.timeTransaction).getTime() -
        new Date(a.timeTransaction).getTime(),
    );
  }, [transactionsHistory]);

  return (
    <View>
      <Balance userId={userId} />

      <FlatList
        data={sortedTransactions}
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
