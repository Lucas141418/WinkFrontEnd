import { StatusBar } from "expo-status-bar";
import ScreenCom from "./Screen";
import { UserProvider } from "../context/userInfoContext";
import AccountDetails from "../Components/AccountDetail/AccounDetails";

export default function Main() {
  // const [userInfo, setUserInfo] = useState<userInfoInterface | undefined>(
  //   undefined,
  // ); //Quitar es para pruebas locales

  return (
    <UserProvider>
      <ScreenCom>
        <AccountDetails />

        <StatusBar style="auto" />
      </ScreenCom>
    </UserProvider>
  );
}
