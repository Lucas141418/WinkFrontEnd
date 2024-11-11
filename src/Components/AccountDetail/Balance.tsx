import { ScrollView, RefreshControl, View, Text } from "react-native";
import { useContext, useEffect, useState } from "react";
import AppStyles from "../../styles/AppStyles";
import { userIdType, userInfoInterface } from "../../types";
import { formaterCurrency } from "../../Utils";
import ButtonSinpe from "./ButtonSinpe";
import useFetchUserInfo from "../../Hooks/useFetchUserInfo";

export default function Balance({ userId }: userIdType) {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { getUserInfo, setUserInfo, userInfo } = useFetchUserInfo();

  const onRefresh = async () => {
    setRefreshing(true);
    const updatedUser = await getUserInfo({ userId });
    setUserInfo(updatedUser as userInfoInterface);
    setRefreshing(false);
  };

  useEffect(() => {
    console.log("useEffect de balance");
    getUserInfo({ userId }).then(setUserInfo);
  }, []);


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
