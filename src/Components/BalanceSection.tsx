import React, { useEffect, useState } from "react";
import { View, Text, FlatList, RefreshControl, ScrollView } from "react-native";
import AppStyles from "../styles/AppStyles";
import { formaterCurrency } from "../Utils";
import { TransactionsCardsAnimated } from "./TransactionsCard";
import ButtonSinpe from "./ButtonSinpe";
import { UsersIds } from "../constants";
import useFetchUserInfo from "../Hooks/useFetchUserInfo";
import { TransactionInterface, userInfoInterface } from "../types";
import { transactionsJSON } from "../Mocks/transactions.json";
import useFetchTransactionsHistory from "../Hooks/useFetchTransactionsHistory";

export default function BalanceSection() {
  const { userId1: userId } = UsersIds; // Simulate handling of different users
  const [refreshing, setRefreshing] = useState(false);
  const [userInfo, setUserInfo] = useState<userInfoInterface | null>({
    balance: 10000,
    userId: "dasd",
    userPhone: "123123",
    userName: "eduardo",
  });
  // const { getUserInfo, setUserInfo, userInfo } = useFetchUserInfo();

  const [transactionsHistory, setTransactionHistory] = useState<
    TransactionInterface[]
  >([]);

  useEffect(() => {
    // Simulate fetching transactions and user info on mount
    setTransactionHistory(transactionsJSON);
    // getUserInfo({ userId }).then(setUserInfo);
  }, []);
  // const { transactionsHistory, getTransactionHistory } =
  //   useFetchTransactionsHistory();

  // useEffect(() => {
  //   getTransactionHistory({ userId });
  // }, [getTransactionHistory, userId]);
  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   const updatedUser = await getUserInfo({ userId });
  //   setUserInfo(updatedUser as userInfoInterface);
  //   setRefreshing(false);
  // };

  const balanceSection = (balanceAmount: number) => (
    <View style={AppStyles.containerBalance}>
      <Text style={AppStyles.h1}>Cuenta Colones</Text>
      <Text style={AppStyles.subText}>Saldo disponible</Text>
      <Text style={AppStyles.currentBalance}>
        {formaterCurrency(balanceAmount)}
      </Text>
      <Text style={AppStyles.subText}>¿Qué querés hacer?</Text>
      <ButtonSinpe />
      <Text style={AppStyles.h2}>Movimientos</Text>
    </View>
  );

  if (!userInfo) return <Text>No hay datos de usuario</Text>;

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
      >
        {balanceSection(userInfo.balance)}
      </ScrollView>

      <FlatList
        data={transactionsHistory}
        keyExtractor={(item) => item.transactionId}
        renderItem={({ item, index }) => (
          <TransactionsCardsAnimated transaction={item} index={index} />
        )}
        style={AppStyles.transactionsList}
      />
    </View>
  );
}
