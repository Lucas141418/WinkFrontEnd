import { StatusBar } from "expo-status-bar";
import ScreenCom from "./Screen";
import BalanceSection from "./BalanceSection";
import { UserProvider } from "../context/userInfoContext";

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
