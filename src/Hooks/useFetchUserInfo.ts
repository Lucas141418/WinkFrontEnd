import { useCallback, useContext, useState } from "react";
import { userIdType } from "../types";
import { fetchUserInfoById } from "../Services/FetchData";
import { UserInfoContext } from "../context/userInfoContext";

export default function useFetchUserInfo() {
  const { setUserInfo, userInfo, setLoading, loading } =
    useContext(UserInfoContext);

  const [error, setError] = useState<string | null>(null);

  const getUserInfo = useCallback(
    async ({ userId }: userIdType) => {
      console.log("calling the user");
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUserInfoById({ userId });
        console.log("User info actualizado:", data);
        setUserInfo(data);
        return data;
      } catch (err) {
        setError(err + "Error fetching user info");
      } finally {
        setLoading(false);
      }
    },
    [setUserInfo],
  );

  return { userInfo, setLoading, error, getUserInfo, setUserInfo, loading };
}
