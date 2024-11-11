import React, { useEffect, useMemo } from "react";
import { View, FlatList } from "react-native";
import Balance from "./Balance";
import AppStyles from "../../styles/AppStyles";
import useFetchTransactionsHistory from "../../Hooks/useFetchTransactionsHistory";
import { TransactionsCardsAnimated } from "../Transaction/TransactionsCard";
import { parseCustomDate, UsersIds } from "../../constants";

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
