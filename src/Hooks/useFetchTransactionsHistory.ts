import { useCallback, useState } from "react";
import { TransactionInterface, userIdType } from "../types";
import { fetchUserTransactions } from "../Services/FetchData";

export default function useFetchTransactionsHistory() {
  const [transactionsHistory, settransactionsHistory] = useState<
    TransactionInterface[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getTransactionHistory = useCallback(({ userId }: userIdType) => {
    console.log("calling the history");
    setLoading(true); // Comienza la carga
    fetchUserTransactions({ userId })
      .then((data) => {
        settransactionsHistory(data);
      })
      .catch((err) => {
        console.error("Error al obtener las transacciones:", err);
      })
      .finally(() => {
        setLoading(false); // Termina la carga
      });
  }, []);

  return { transactionsHistory, getTransactionHistory, loading };
}
