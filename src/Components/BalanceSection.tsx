import { View, Text, FlatList } from "react-native";
import AppStyles from "../styles/AppStyles";
import { formaterCurrency } from "../Utils";
import { TransactionsCardsAnimated } from "./TransactionsCard";
import ButtonSinpe from "./ButtonSinpe";
import { UsersIds } from "../constants";
import useFetchTransactionsHistory from "../Hooks/useFetchTransactionsHistory";
import { useEffect } from "react";
import useFetchUserInfo from "../Hooks/useFetchUserInfo";

export default function BalanceSection() {
  const { userId1: userId } = UsersIds; //This line is for simulation  if there were a handleing of diferents users

  const { getUserInfo, setUserInfo, userInfo } = useFetchUserInfo();
  useEffect(() => {
    getUserInfo({ userId }).then(setUserInfo);
  }, []);

  // const [transactionsHistory, setTransactionHistory] = useState<
  //   TransactionInterface[]
  // >([]);

  const { transactionsHistory, getTransactionHistory } =
    useFetchTransactionsHistory();

  useEffect(() => {
    getTransactionHistory({ userId });
  }, [getTransactionHistory, userId]);

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

        <ButtonSinpe />
      </View>

      <Text style={AppStyles.h2}>Movimientos</Text>

      <FlatList
        data={transactionsHistory}
        keyExtractor={(item) => item.transactionId}
        renderItem={({ item, index }) => (
          <TransactionsCardsAnimated transaction={item} index={index} />
        )}
      ></FlatList>
    </View>
  );
}
