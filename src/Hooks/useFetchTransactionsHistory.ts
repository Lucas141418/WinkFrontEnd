import { useCallback, useState } from "react";
import { TransactionInterface, transactionsLazyInterface } from "../types";
import { fetchUserTransactions } from "../Services/FetchData";

export default function useFetchTransactionsHistory() {
  const [transactionsHistory, setTransactionsHistory] = useState<
    TransactionInterface[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastEvaluatedKey, setLastEvaluatedKey] = useState<string>("");

  // eslint-disable-next-line prettier/prettier
  const preventDuplicates = (
    transactions: TransactionInterface[],
  ): TransactionInterface[] => {
    const uniqueTransactions = transactions
      .filter((transaction, index, self) => {
        return (
          index ===
          self.findIndex((t) => t.transactionId === transaction.transactionId)
        );
      })
      .sort(
        (a, b) =>
          new Date(b.timeTransaction).getTime() -
          new Date(a.timeTransaction).getTime(),
      );
    return uniqueTransactions;
  };

  const getTransactionHistory = useCallback(
    ({ userId, lastEvaluatedKey }: transactionsLazyInterface) => {
      console.log("calling the history" + transactionsHistory);
      setLoading(true);
      fetchUserTransactions({ userId, lastEvaluatedKey })
        .then((data) => {
          setTransactionsHistory((prevState) => {
            // eslint-disable-next-line prettier/prettier
            return preventDuplicates([...prevState, ...data.transactions]);
          });
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
