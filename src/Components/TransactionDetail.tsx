import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import AppStyles from "../styles/AppStyles";
import { formaterCurrency } from "../Utils";
import useFetchTransaction from "../Hooks/useFetchTransaction";
import { useEffect, useState } from "react";
import { TransactionInterface } from "../types";
import { transactionsJSON } from "../Mocks/transactions.json";

interface TransactionDetailProps {
  transactionId: string;
  userId: string;
}

// eslint-disable-next-line prettier/prettier
export default function TransactionDetail({
  transactionId,
  userId,
}: TransactionDetailProps) {
  const [transactionDetailed, setTransactionDetailed] =
    useState<TransactionInterface>({
      detailsTransaction: "",
      timeTransaction: "",
      recipientPhone: "",
      userId: "",
      recipientName: "",
      amount: 0,
      recipientId: "",
      transactionId: "",
    });
  // const { transactionDetailed, getTransaction } = useFetchTransaction();

  // useEffect(() => {
  //   getTransaction({ userId, transactionId });
  // }, [transactionId, userId]);

  useEffect(() => {
    setTransactionDetailed(transactionsJSON[0]);
  }, [transactionId]);

  return (
    <View style={AppStyles.TransactionContainer}>
      <View style={AppStyles.TransactioncontactBackground}>
        <Text style={AppStyles.TransactionInitialPreview}>CN</Text>
      </View>

      <Text style={AppStyles.TransactionText}>
        SINPE móvil - {transactionDetailed.recipientName}
      </Text>
      <Text style={AppStyles.transactionAmountDetailed}>
        {formaterCurrency(transactionDetailed.amount)}
      </Text>

      <View style={AppStyles.TransactionContainer}>
        <View>
          <Text style={AppStyles.TransactionSubText}>Fecha: </Text>
          <Text style={AppStyles.TransactionSectionText}>
            Date Test{transactionDetailed.timeTransaction}
          </Text>
        </View>
        <View>
          <Text style={AppStyles.TransactionSubText}>Descripción:</Text>
          <Text style={AppStyles.TransactionSectionText}>
            {transactionDetailed.detailsTransaction}
          </Text>
        </View>
        <View>
          <Text style={AppStyles.TransactionSubText}>Tipo de movimiento:</Text>
          <Text style={AppStyles.TransactionSectionText}>SINPE móvil</Text>
        </View>
      </View>

      <Link asChild href="/">
        <Pressable style={AppStyles.Transactionbutton}>
          <Text style={AppStyles.buttonText}>Volver</Text>
        </Pressable>
      </Link>
    </View>
  );
}
