import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import Balance from "./Balance";
import AppStyles from "../../styles/AppStyles";
import useFetchTransactionsHistory from "../../Hooks/useFetchTransactionsHistory";
import { TransactionsCardsAnimated } from "../Transaction/TransactionsCard";
import { userInfoInterface } from "../../types";

type userInfoProps = {
  userInfo: userInfoInterface;
};

export default function AccountDetails({ userInfo }: userInfoProps) {
  const { transactionsHistory, getTransactionHistory, lastEvaluatedKey } =
    useFetchTransactionsHistory();
  const { userId } = userInfo;

  useEffect(() => {
    getTransactionHistory({ userId, lastEvaluatedKey: null });
    console.log("lastEvaluatedKey1", transactionsHistory);
  }, []);

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
