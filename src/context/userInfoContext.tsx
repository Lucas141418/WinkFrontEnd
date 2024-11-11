import { createContext, ReactNode, useState } from "react";
import { userInfoInterface } from "../types";
interface UserInfoContextProp {
  userInfo: userInfoInterface;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoInterface>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserInfoContext = createContext<UserInfoContextProp>({
  userInfo: {
    userName: "",
    balance: 0,
    userId: "",
    userPhone: "",
  },
  loading: false,
  setLoading: () => {},
  setUserInfo: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<userInfoInterface>({
    userName: "",
    balance: 0,
    userId: "",
    userPhone: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <UserInfoContext.Provider
      value={{ userInfo, setUserInfo, loading, setLoading }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}
