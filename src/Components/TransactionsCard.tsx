import { Link } from "expo-router";
import { Pressable, View, Text, Animated } from "react-native";
import { formaterCurrency } from "../Utils";
import { TransactionInterface } from "../types";
import { useEffect, useRef } from "react";
import AppStyles from "../styles/AppStyles";

// eslint-disable-next-line prettier/prettier
export function TransactionsCards({
  transaction,
}: {
  transaction: TransactionInterface;
}) {
  return (
    <Link
      asChild
      href={`/${transaction.transactionId}`}
      key={transaction.transactionId}
      style={AppStyles.transactionCard}
    >
      <Pressable style={AppStyles.transactionDetails}>
        <View>
          <Text style={AppStyles.transactionTitle}>
            Sinpe móvil - {transaction.recipientName}
          </Text>
          <Text style={AppStyles.transactionTime}>{transaction.timeTransaction}</Text>
        </View>
        <Text style={AppStyles.transactionAmount}>- {formaterCurrency(transaction.amount)}</Text>
      </Pressable>
    </Link>
  );
}

// eslint-disable-next-line prettier/prettier
export function TransactionsCardsAnimated({
  transaction,
  index,
}: {
  transaction: TransactionInterface;
  index: number;
}) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <TransactionsCards transaction={transaction} />
    </Animated.View>
  );
}
