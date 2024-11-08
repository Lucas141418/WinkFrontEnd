import { useCallback, useEffect, useState } from "react";
import { TransactionInterface, userIdType } from "../types";
import { fetchUserTransactions } from "../Services/FetchData";

export default function useFetchTransactionsHistory() {
  // eslint-disable-next-line prettier/prettier
  const [transactionsHistory, settransactionsHistory] = useState<
    TransactionInterface[]
  >([]);

  const getTransactionHistory = useCallback(({ userId }: userIdType) => {
    fetchUserTransactions({ userId }).then(settransactionsHistory);
  }, []);

  return { transactionsHistory, getTransactionHistory };
}
