import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  View,
  Pressable,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";
import AppStyles from "../styles/AppStyles";
import { formaterCurrency } from "../Utils";
import { TransactionsCardsAnimated } from "./TransactionsCard";
import { TransactionInterface, userInfoInterface } from "../types";
import { transactionsJSON } from "../Mocks/transactions.json";

import { useEffect, useState } from "react";
import useFetchTransactionsHistory from "../Hooks/useFetchTransactionsHistory";

interface balanceProp {
  userInfo?: userInfoInterface;
}

export default function BalanceSection({ userInfo }: balanceProp) {
  // const userId = userInfo?.userId;
  const [transactionsHistory, setTransactionHistory] = useState<
    TransactionInterface[]
  >([]);

  // const { transactionsHistory, getTransactionHistory } =
  //   useFetchTransactionsHistory();

  useEffect(() => {
    // getTransactionHistory({ userId });
    setTransactionHistory(transactionsJSON);
  }, []); //Quitar despues

  // }, [getTransactionHistory, userId]);

  if (!userInfo) return <Text> No hay datos de usuario</Text>;

  return (
    <View>
      <View style={AppStyles.containerBalance}>
        <Text style={AppStyles.h1}>Cuenta Colones</Text>
        <Text style={AppStyles.subText}>Saldo disponible</Text>
        <Text style={AppStyles.currentBalance}>
          {formaterCurrency(userInfo.balance)}
        </Text>
        <Text style={AppStyles.subText}> ¿Qué querés hacer?</Text>

        <View style={AppStyles.viewButton}>
          <Link asChild href="/SinpeScreen">
            <Pressable style={AppStyles.sinpeButton}>
              <Feather name="refresh-ccw" size={35} color="blue" />
            </Pressable>
          </Link>
          <Text>SINPE móvil</Text>
        </View>
      </View>

      <Text style={AppStyles.h2}>Movimientos</Text>
      {transactionsHistory.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={transactionsHistory}
          keyExtractor={(item) => item.transactionId}
          renderItem={({ item, index }) => (
            <TransactionsCardsAnimated transaction={item} index={index} />
          )}
        ></FlatList>
      )}
    </View>
  );
}
