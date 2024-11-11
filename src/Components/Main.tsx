import { StatusBar } from "expo-status-bar";
import ScreenCom from "./Screen";
import { UserProvider } from "../context/userInfoContext";
import AccountDetails from "./AccountDetail/AccountDetails";
import { useState } from "react";
import WinkAnimation from "./Animation/WinkAnimation";

export default function Main() {
  const [startAnimation, setStartAnimation] = useState<boolean>(true);

  const handleEndAnimation = () => {
    setStartAnimation(false);
  };

  return (
    <UserProvider>
      <ScreenCom>
        {startAnimation ? (
          <WinkAnimation onExitFinish={handleEndAnimation} />
        ) : (
          <AccountDetails />
        )}

        <StatusBar style="auto" />
      </ScreenCom>
    </UserProvider>
  );
}
