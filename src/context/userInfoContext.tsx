import { createContext, ReactNode, useContext, useState } from "react";
import { userInfoInterface } from "../types";
interface UserInfoContextProp {
  userInfo: userInfoInterface;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoInterface>>;
}

export const UserInfoContext = createContext<UserInfoContextProp>({
  userInfo: {
    userName: "",
    balance: 0,
    userId: "",
    userPhone: "",
  },
  setUserInfo: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<userInfoInterface>({
    userName: "",
    balance: 0,
    userId: "",
    userPhone: "",
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
}
