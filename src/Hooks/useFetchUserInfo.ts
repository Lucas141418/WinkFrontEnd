import { useCallback, useContext, useState } from "react";
import { userIdType, userInfoInterface } from "../types";
import { fetchUserInfoById } from "../Services/FetchData";
import { UserInfoContext } from "../context/userInfoContext";

export default function useFetchUserInfo() {
  const { setUserInfo, userInfo } = useContext(UserInfoContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUserInfo = useCallback(
    async ({ userId }: userIdType) => {
      console.log("calling the user");
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchUserInfoById({ userId });
        console.log("User info actualizado:", data);
        setUserInfo(data);
        return data;
      } catch (err) {
        setError(err + "Error fetching user info");
      } finally {
        setIsLoading(false);
      }
    },
    [setUserInfo],
  );

  return { userInfo, isLoading, error, getUserInfo, setUserInfo };
}
