import { useCallback, useState } from "react";
import { TransactionInterface, transactionsLazyInterface } from "../types";
import { fetchUserTransactions } from "../Services/FetchData";

export default function useFetchTransactionsHistory() {
  const [transactionsHistory, setTransactionsHistory] = useState<
    TransactionInterface[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastEvaluatedKey, setLastEvaluatedKey] = useState<string>("");

  const getTransactionHistory = useCallback(
    ({ userId, lastEvaluatedKey }: transactionsLazyInterface) => {
      console.log("calling the history");
      setLoading(true);
      fetchUserTransactions({ userId, lastEvaluatedKey })
        .then((data) => {
          setTransactionsHistory(data.transactions);
          setLastEvaluatedKey(data.lastEvaluatedKey || null);
        })
        .catch((err) => {
          console.error("Error al obtener las transacciones:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [],
  );

  return {
    transactionsHistory,
    getTransactionHistory,
    loading,
    setLastEvaluatedKey,
    lastEvaluatedKey,
  };
}
