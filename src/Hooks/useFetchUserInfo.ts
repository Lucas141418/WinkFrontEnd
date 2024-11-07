import { useEffect, useState } from "react";
import { userIdType, userInfoInterface } from "../types";
import { fetchUserInfoById } from "../Services/FetchData";

export default function useFetchUserInfo({ userId }: userIdType) {
  const [userInfo, setUserInfo] = useState<userInfoInterface | undefined>(
    undefined,
  );

  const getUserInfo = ({ userId }: userIdType) => {
    console.log("calling the user");
    fetchUserInfoById({ userId }).then(setUserInfo);
  };

  useEffect(() => {
    getUserInfo({ userId });
  }, [userId]);

  return { userInfo, getUserInfo };
}
