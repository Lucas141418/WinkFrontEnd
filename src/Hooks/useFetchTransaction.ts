import { useState } from "react";
import { TransactionFetchInterface, TransactionInterface } from "../types";
import { fetchTransactionById } from "../Services/FetchData";

export default function useFetchTransaction() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transactionDetailed, setTransactionDetailed] =
    useState<TransactionInterface>({
      detailsTransaction: "",
      timeTransaction: "",
      recipientPhone: "",
      userId: "",
      recipientName: "",
      amount: 0,
      recipientId: "",
      transactionId: "",
    });

  // eslint-disable-next-line prettier/prettier
  const getTransaction = async ({
    userId,
    transactionId,
  }: TransactionFetchInterface) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchTransactionById({ userId, transactionId });
      setTransactionDetailed(data);
    } catch (err) {
      setError(err + "Error fetching transaction details");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    transactionDetailed,
    getTransaction,
    isLoading,
    error,
  };
}
