import { StatusBar } from "expo-status-bar";
import ScreenCom from "./Screen";
import { UserProvider } from "../context/userInfoContext";
import AccountDetails from "../Components/AccountDetail/AccounDetails";
import { useEffect, useState } from "react";
import WinkAnimation from "./Animation/WinkAnimation";
import useFetchUserInfo from "../Hooks/useFetchUserInfo";
import { UsersIds } from "../constants";

export default function Main() {
  /**
   * @type {string} userId
   * @description Simulate handling of different users by changing the userId value
   */
  const { userId1: userId }: { userId1: string } = UsersIds;
  const [startAnimation, setStartAnimation] = useState<boolean>(true);
  const { userInfo, getUserInfo, setUserInfo, loading } = useFetchUserInfo();

  const handleEndAnimation = () => {
    setStartAnimation(loading);
    console.log("Carga StartAnimation" + startAnimation);
  };

  useEffect(() => {
    getUserInfo({ userId }).then(setUserInfo);
    console.log("Carga principal" + loading);
  }, []);

  return (
    <UserProvider>
      <ScreenCom>
        {startAnimation ? (
          <WinkAnimation onExitFinish={handleEndAnimation} />
        ) : (
          <AccountDetails userInfo={userInfo} />
        )}

        <StatusBar style="auto" />
      </ScreenCom>
    </UserProvider>
  );
}
