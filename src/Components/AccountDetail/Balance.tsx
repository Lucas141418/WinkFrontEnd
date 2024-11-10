import { ScrollView, RefreshControl, View, Text } from "react-native";
import { useEffect, useState } from "react";
import AppStyles from "../../styles/AppStyles";
import { userIdType, userInfoInterface } from "../../types";
import { formaterCurrency } from "../../Utils";
import ButtonSinpe from "./ButtonSinpe";
import useFetchUserInfo from "../../Hooks/useFetchUserInfo";

export default function Balance({ userId }: userIdType) {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  // const { getUserInfo, setUserInfo, userInfo } = useFetchUserInfo();

  const [userInfo, setUserInfo] = useState<userInfoInterface>({
    balance: 10000,
    userId: "dasd",
    userPhone: "123123",
    userName: "eduardo",
  });

  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   const updatedUser = await getUserInfo({ userId });
  //   setUserInfo(updatedUser as userInfoInterface);
  //   setRefreshing(false);
  // };
  const onRefresh = async () => {};

  // useEffect(() => {
  //   // Simulate fetching transactions and user info on mount
  //   // getUserInfo({ userId }).then(setUserInfo);
  // }, []);

  // if (!userInfo) return <Text>No hay datos de usuario</Text>;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />
      }
    >
      <View style={AppStyles.containerBalance}>
        <Text style={AppStyles.h1}>Cuenta Colones</Text>
        <Text style={AppStyles.subText}>Saldo disponible</Text>
        <Text style={AppStyles.currentBalance}>
          {formaterCurrency(userInfo.balance)}
        </Text>
        <Text style={AppStyles.subText}>¿Qué querés hacer?</Text>
        <ButtonSinpe />
        <Text style={AppStyles.h2}>Movimientos</Text>
      </View>
    </ScrollView>
  );
}
