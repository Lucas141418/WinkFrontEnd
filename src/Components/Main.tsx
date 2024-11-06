import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Pressable, ScrollView } from "react-native";
import AppStyles from "../styles/AppStyles";
import logoIMg from "../assets/WINK.png";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { transactionsJSON } from "../Mocks/transactions.json";
import { Users } from "../Mocks/users.json";
import { useEffect, useState } from "react";
import { Transaction, userInfo } from "../types";
import { formaterCurrency } from "../Utils";

export default function Main() {
  const [userInfo, setUserInfo] = useState<userInfo | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setUserInfo(Users[0]); //Cambiar
    setTransactions(transactionsJSON);
  }, []);

  return (
    <View style={AppStyles.container}>
      <Image source={logoIMg} style={AppStyles.logo} />
      <Link href="/SendSinpe">Ir al sinpe </Link>

      <View style={AppStyles.containerBalance}>
        <Text style={AppStyles.h1}>Cuenta Colones</Text>
        <Text style={AppStyles.subText}>Saldo disponible</Text>
        <Text style={AppStyles.currentBalance}>
          {formaterCurrency(userInfo?.balance)}
        </Text>
        <Text style={AppStyles.subText}> ¿Qué querés hacer?</Text>

        <View style={{ alignItems: "center" }}>
          <Link asChild href="/SendSinpe">
            <Pressable style={AppStyles.sinpeButton}>
              <Feather name="refresh-ccw" size={35} color="blue" />
            </Pressable>
          </Link>
          <Text>SINPE móvil</Text>
        </View>
      </View>

      <ScrollView>
        {transactions.map((transaction) => (
          <Link asChild href={`/${transaction.transactionId}`}>
            <Pressable key={transaction.transactionId}>
              <View>
                <Text> Sinpe móvil - {transaction.recipientName}</Text>
                <Text>{transaction.timeTransaction}</Text>
              </View>
              <Text>{formaterCurrency(transaction.amount)}</Text>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
