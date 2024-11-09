import { StatusBar } from "expo-status-bar";
import ScreenCom from "./Screen";
import { UserProvider } from "../context/userInfoContext";
import BalanceSection from "./BalanceSection";

export default function Main() {
  // const [userInfo, setUserInfo] = useState<userInfoInterface | undefined>(
  //   undefined,
  // ); //Quitar es para pruebas locales

  return (
    <UserProvider>
      <ScreenCom>
        <BalanceSection />

        <StatusBar style="auto" />
      </ScreenCom>
    </UserProvider>
  );
}
