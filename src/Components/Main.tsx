import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Users } from "../Mocks/users.json";
import { useEffect, useState } from "react";
import { formaterCurrency } from "../Utils";
import useFetchUserInfo from "../Hooks/useFetchUserInfo";
import { TransactionInterface, userInfoInterface } from "../types";
import { UsersIds } from "../constants";
import ScreenCom from "./Screen";
import BalanceSection from "./BalanceSection";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Main() {
  const [userInfo, setUserInfo] = useState<userInfoInterface | undefined>(
    undefined,
  ); //Quitar es para pruebas locales

  // const { userId1: userId } = UsersIds; //This is a good line
  // const { userInfo, getUserInfo } = useFetchUserInfo({ userId });

  useEffect(() => {
    setUserInfo(Users[0]); //delete is for testing propurse

    // getUserInfo;
  }, []);

  return (
    <ScreenCom>
      <BalanceSection userInfo={userInfo} />

      <StatusBar style="auto" />
    </ScreenCom>
  );
}
